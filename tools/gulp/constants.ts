import {join} from 'path';

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');
export const TEST_ROOT = join(PROJECT_ROOT, 'test');
export const NPM_ASSETS = join(PROJECT_ROOT, 'tools/scripts/release/npm_assets');

export const DIST_ROOT = join(PROJECT_ROOT, 'dist');
export const DIST_COMPONENTS_ROOT = join(DIST_ROOT, 'ng2-form-validator');

// Useful to build deployed files directly to /node_modules/
export const DIST_NODE_MODULES = join(PROJECT_ROOT, 'node_modules/ng2-form-validator');


export const NPM_VENDOR_FILES = [
  '@angular', 'core-js/client', 'rxjs', 'systemjs/dist', 'zone.js/dist'
];
