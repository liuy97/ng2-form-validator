import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

/* validator.js@6.2.0, MIT, start */
const int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
const intLeadingZeroes = /^[-+]?[0-9]+$/;

export function isInt(str: any, options?: any) {
  if (typeof str !== 'string') {
    return false;
  }
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  let regex = (
    options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ?
    int : intLeadingZeroes
  );

  // Check min/max/lt/gt
  let minCheckPassed = (!options.hasOwnProperty('min') || str >= options.min);
  let maxCheckPassed = (!options.hasOwnProperty('max') || str <= options.max);
  let ltCheckPassed = (!options.hasOwnProperty('lt') || str < options.lt);
  let gtCheckPassed = (!options.hasOwnProperty('gt') || str > options.gt);

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isInt]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsIntValidatorDirective, multi: true}]
})

export class IsIntValidatorDirective implements Validator {
  @Input() isInt: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isInt(control.value, this.isInt) ? null : { isInt: false };
  }
}
