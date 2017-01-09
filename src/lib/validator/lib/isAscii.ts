import {
  Directive,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  Validator,
  NG_VALIDATORS,
  Validators,
  AbstractControl
} from '@angular/forms';
/* validator.js@6.2.0, MIT, start */

/* eslint-disable no-control-regex */
const ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

export function isAscii(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return ascii.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isAscii]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsAsciiValidatorDirective, multi: true}]
})

export class IsAsciiValidatorDirective implements Validator {
  @Input() isAscii: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isAscii(control.value) ? null : { isAscii: false };
  }
}
