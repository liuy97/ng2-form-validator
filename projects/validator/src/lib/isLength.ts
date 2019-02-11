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
/* eslint-disable prefer-rest-params */
export function isLength(str: any, options?: any) {
  if (typeof str !== 'string') {
    return false;
  }
  let min: any;
  let max: any;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    min = arguments[1] || 0;
  }
  const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsLengthValidatorDirective, multi: true}]
})

export class IsLengthValidatorDirective implements Validator {
  @Input() isLength: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isLength(control.value, this.isLength) ? null : { isLength: false };
  }
}
