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
const float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

export function isFloat(str: any, options: any) {
  if (typeof str !== 'string') {
    return false;
  }
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) &&
    (!options.hasOwnProperty('min') || str >= options.min) &&
    (!options.hasOwnProperty('max') || str <= options.max) &&
    (!options.hasOwnProperty('lt') || str < options.lt) &&
    (!options.hasOwnProperty('gt') || str > options.gt);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isFloat]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsFloatValidatorDirective, multi: true}]
})

export class IsFloatValidatorDirective implements Validator {
  @Input() isFloat: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isFloat(control.value, this.isFloat) ? null : { isFloat: false };
  }
}
