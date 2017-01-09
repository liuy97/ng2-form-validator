(function () {
  'use strict';

  const SOURCE_REPO  = 'flex-layout';
  const SOURCE_REPO_TITLE = 'Angular Flex-Layout';
  const BUILD_REPO   = 'flex-layout-builds';

  var colors         = require('colors');
  var strip          = require('cli-color/strip');
  var fs             = require('fs');
  var prompt         = require('prompt-sync')();
  var child_process  = require('child_process');
  var pkg            = require('./package.json');
  var releases       = require('./tools/releases.json');
  var oldVersion     = pkg.version;
  var abortCmds      = [ 'git reset --hard', 'git checkout staging', 'rm ./abort ./push' ];
  var pushCmds       = [ 'rm ./abort ./push' ];
  var cleanupCmds    = [];
  var defaultOptions = { encoding: 'utf-8' };
  var origin         = 'git@github.com:angular/flex-layout.git';
  var lineWidth      = 80;
  var lastMajorVer = releases.latest, newVersion;
  var isYes = matches.bind(this, "yes");
  var dryRun = isYes(prompt(`Is this a dry-run? ${"[yes/no]".cyan} `));

  if (dryRun) {
    let msg = `What would you like the old version to be? (default: ${oldVersion.cyan}) `;
    oldVersion = prompt(msg) || oldVersion;
    newVersion = getNewVersion();
    build();
  } else if (validate()) {
    build();
  }

  function build () {
    line();

    checkoutVersionBranch();
    updateVersion(newVersion);
    createChangelog();
    writeReleasesJson();
    commitChanges();
    tagRelease();
    cloneRepo();
    generateLatestBuild();
    updateMaster(newVersion);
    writeScript('abort', abortCmds.concat(cleanupCmds));
    writeScript('push', (dryRun ? abortCmds :pushCmds).concat(cleanupCmds));

    line();
    log(`Your repo is ${"ready".cyan} to be pushed.`);
    log(`Please look over ${"CHANGELOG.md".cyan} and make any changes.`);
    log(`If you would like to cancel this release, please run "${"./abort".red}"`);
    log(`When you are ready, please run "${"./push".cyan}" to finish the process.`);
  }

  //-- utility methods

  /** confirms that you will be able to perform the release before attempting */
  function validate () {
    if (exec('npm whoami') !== 'angularcore') {
      err('You must be authenticated with npm as "angularcore" to perform a release.');
    } else if (exec('git rev-parse --abbrev-ref HEAD') !== 'staging') {
      err('Releases can only performed from "staging" at this time.');
    } else {
      return true;
    }
    function err (msg) {
      var str = 'Error: ' + msg;
      log(str.red);
    }
  }

  /**
   * Confirm case-insensitive prompt() response partially matches
   * one of the options.
   */
  function matches(options, value) {
    value = value.toLowerCase();
    if ( typeof options === 'string' ) options = [options];
    options = [' '].concat(options);

    return options.reduce((prev, curr)=>{
      return !prev ? curr.indexOf(value) > -1 : true;
    },false);
  }

  /** creates the version branch and adds abort steps */
  function checkoutVersionBranch () {
    exec(`git branch -q -D release/${newVersion}`);
    exec(`git checkout -q -b release/${newVersion}`);
    abortCmds.push('git co master');
    abortCmds.push(`git branch -D release/${newVersion}`);
  }

  /** writes the new version to package.json */
  function updateVersion(newVersion) {
    start(`Updating ${"package.json".cyan} version from ${oldVersion.cyan} to ${newVersion.cyan}...`);

    // Update the repo-root package.json
    pkg.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

    // update the package.json deploy to npm
    let npmPackagePath = './tools/scripts/release/npm_assets/package.json';
    pkg = require(npmPackagePath);
    pkg.version = newVersion;
    fs.writeFileSync(npmPackagePath, JSON.stringify(pkg, null, 2));

    done();

    abortCmds.push('git checkout package.json');
    abortCmds.push(`git checkout ${npmPackagePath}`);

    pushCmds.push('git add package.json');
    pushCmds.push(`git add ${npmPackagePath}`);
  }

  /** generates the changelog from the commits since the last release */
  function createChangelog () {
    start(`Generating changelog from ${oldVersion.cyan} to ${newVersion.cyan}...`);

    exec(`git fetch --tags ${origin}`);
    exec(`git checkout v${lastMajorVer} -- CHANGELOG.md`);
    exec(`gulp changelog --sha=$(git merge-base v${lastMajorVer} HEAD)`);

    done();

    abortCmds.push('git checkout CHANGELOG.md');
    pushCmds.push('git add CHANGELOG.md');
  }

  function writeReleasesJson () {
    start('Adding new version of Releases...');
    const RELEASE_PATH = './tools/releases.json';
    var config = require( RELEASE_PATH );

        config.versions.unshift(newVersion);
        config.latest = newVersion;

    fs.writeFileSync(RELEASE_PATH, JSON.stringify(config, null, 2));

    done();
  }

  /** utility method for clearing the terminal */
  function clear () {
    write("\u001b[2J\u001b[0;0H");
  }

  /** prompts the user for the new version */
  function getNewVersion () {
    var options = getVersionOptions(oldVersion), key, type, version;

    header();
    log(`The current version is ${oldVersion.cyan}.`);
    log('');
    log('What should the next version be?');
    for (key in options) { log((+key + 1) + ') ' + options[ key ].cyan); }
    log('');
    type = prompt('Please select a new version: ');

    if (options[ type - 1 ]) version = options[ type - 1 ];
    else if (type.match(/^\d+\.\d+\.\d+(-rc\.?\d+)?$/)) version = type;
    else throw new Error('Your entry was invalid.');

    log('');
    log('The new version will be ' + version.cyan + '.');
    return isYes(prompt(`Is this correct? ${"[yes/no]".cyan} `)) ? version : getNewVersion();

    function getVersionOptions (version) {
      return version.match(/-alpha\.?\d+$/) ? [ increment(version, 'alpha'), addBeta(increment(version, 'minor')) ] :
             version.match(/-beta\.?\d+$/) ? [ increment(version, 'beta'), increment(version, 'rc') ] :
             version.match(/-rc\.?\d+$/) ? [ increment(version, 'rc'), increment(version, 'patch') ] :
             [ increment(version, 'patch'), increment(version, 'minor') ];

      function increment (versionString, type) {
        var version = parseVersion(versionString);
        switch (type) {
          case 'alpha':
          case 'beta' :
          case 'rc'   :
          case 'patch':
          case 'minor':
            ++version[type];
            break;
        }
        resetVersionParts(type);

        return buildVersionString(version);

        function parseVersion (version) {
          var hasBeta = version.indexOf("-beta") > -1;
          var parts = version.split(/\-beta\.|\-rc\.|\./g);
          return {
            string: version,
            major:  parts[ 0 ],
            minor:  parts[ 1 ],
            patch:  parts[ 2 ],
            rc   :  hasBeta ? 0 : (parts[ 3 ] || 0),
            beta :  hasBeta ? (parts[ 3 ] || 0) : 0,
          };
        }

        function buildVersionString (version) {
          var  str = version.major + '.' + version.minor + '.' + version.patch;
              str += version.rc    ? `-rc.${version.rc}`       :
                     version.beta  ? `-beta.${version.beta}`   :
                     version.alpha ? `-alpha.${version.alpha}` : "";
          return str;
        }

        function resetVersionParts() {
          switch (type) {
            case 'minor' : version.patch = 0;
            case 'patch' : version.rc    = 0;
            case 'rc'    : version.beta  = 0;
            case 'beta'  : version.alpha = 0;
          }
        }
      }

      function addRC (str) {
        return str + '-rc.1';
      }
      function addBeta (str) {
        return str + '-beta.1';
      }
    }
  }

  /** adds git tag for release and pushes to github */
  function tagRelease () {
    pushCmds.push(
        `git tag v${newVersion} -f`,
        `git push ${origin} HEAD`,
        `git push --tags ${origin}`
    );
  }

  /** amends the commit to include local changes (ie. changelog) */
  function commitChanges () {
    start('Committing changes...');
    exec(`git commit -am "release: version ${newVersion}"`);
    done();
    pushCmds.push('git commit --amend --no-edit');
  }

  /** utility method for cloning github repos */
  function cloneRepo () {
    let path = "./"+BUILD_REPO;
    start(`Cloning ${path.cyan} from Github...`);
    exec(`rm -Rf ${path}`);
    exec(`git clone git@github.com:angular/${BUILD_REPO}.git --depth=1`);
    done();
    cleanupCmds.push(`rm -Rf ${path}`);
  }

  /** writes an array of commands to a bash script */
  function writeScript (name, cmds) {
    fs.writeFileSync(name, '#!/usr/bin/env bash\n\n' + cmds.join('\n'));
    exec('chmod +x ' + name);
  }

  /** updates the version for flex-layout-builds in package.json  */
  function generateLatestBuild () {
    start('Building deployed files...');
    exec([
      'rm -rf dist',
      'gulp build:release'
     ]);
    done();

    let path = "./"+BUILD_REPO;
    start(`Copy files into ${path.cyan} repo...`);
    exec([
           'cp -Rf ../dist/* ./',
           'git add -A',
           `git commit -m "release: version ${newVersion}"`,
           'rm -rf ../dist/*'
         ]);
    done();

    //-- add steps to push script
    pushCmds.push(
      comment('push to builds (master and tag) and publish to npm'),
      `cd ./${BUILD_REPO}`,
      'cp ../CHANGELOG.md .',
      'git add CHANGELOG.md',
      'git commit --amend --no-edit',
      `git tag -f v${newVersion}`,
      'git pull --rebase --strategy=ours',
      'git push',
      'git push --tags',
      'npm publish',
      'cd ..'
    );
  }


  /** copies the changelog back over to master branch */
  function updateMaster (newVersion) {
    pushCmds.push(
        comment('update package.json in master'),
        'git checkout master',
        `git pull --rebase ${origin} master --strategy=theirs`,
        `git checkout release/${newVersion} -- CHANGELOG.md`,
        `node -e "var newVersion = '${newVersion}'; ${stringifyFunction(buildCommand)}"`,
        'git add CHANGELOG.md',
        'git add package.json',
        'git add tools/scripts/release/npm_assets/package.json',
        `git commit -m "update version number in package.json to ${newVersion}"`,
        `git push ${origin} master`
    );

    function buildCommand () {
      var json = require('./package.json');
          json.version = newVersion;

      fs.writeFileSync('./package.json', JSON.stringify(json, null, 2));
    }

    function stringifyFunction (method) {
      return method
          .toString()
          .split('\n')
          .slice(1, -1)
          .map(function (line) { return line.trim(); })
          .join(' ')
          .replace(/"/g, '\\"');
    }
  }

  /** utility method to output header */
  function header () {
    clear();
    line();
    log(center(`${SOURCE_REPO_TITLE} : NPM Release`));
    line();
  }

  /** outputs a centered message in the terminal */
  function center (msg) {
    msg        = ' ' + msg.trim() + ' ';
    var length = msg.length;
    var spaces = Math.floor((lineWidth - length) / 2);
    return Array(spaces + 1).join('-') + msg.green + Array(lineWidth - msg.length - spaces + 1).join('-');
  }

  /** outputs done text when a task is completed */
  function done () {
    log('done'.green);
  }

  /** utility method for executing terminal commands */
  function exec (cmd, userOptions) {
    if (cmd instanceof Array) {
      return cmd.map(function (cmd) { return exec(cmd, userOptions); });
    }
    try {
      var options = Object.create(defaultOptions);
      for (var key in userOptions) options[ key ] = userOptions[ key ];
      return child_process.execSync(cmd + ' 2> /dev/null', options).toString().trim();
    } catch (err) {
      return err;
    }
  }

  /** returns a commented message for use in bash scripts */
  function comment (msg) {
    return '\n# ' + msg + '\n';
  }

  /** prints the left side of a task while it is being performed */
  function start (msg) {
    var msgLength = strip(msg).length,
        diff      = lineWidth - 4 - msgLength;
    write(msg + Array(diff + 1).join(' '));
  }

  /** outputs to the terminal with string variable replacement */
  function log (msg) {
    msg = msg || '';
    console.log(msg);
  }

  /** writes a message without a newline */
  function write (msg) {
    process.stdout.write(msg);
  }

  /** prints a horizontal line to the terminal */
  function line () {
    log(Array(lineWidth + 1).join('-'));
  }
})();
