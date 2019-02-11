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
/* eslint-disable no-control-regex */
const multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

export function isMultibyte(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return multibyte.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isMultibyte]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsMultibyteValidatorDirective, multi: true}]
})

export class IsMultibyteValidatorDirective implements Validator {
  @Input() isMultibyte: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isMultibyte(control.value) ? null : { isMultibyte: false };
  }
}
