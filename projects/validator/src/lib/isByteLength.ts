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
export function isByteLength(str: any, options?: any) {
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
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isByteLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsByteLengthValidatorDirective, multi: true}]
})

export class IsByteLengthValidatorDirective implements Validator {
  @Input() isByteLength: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isByteLength(control.value, this.isByteLength) ? null : { isByteLength: false };
  }
}
