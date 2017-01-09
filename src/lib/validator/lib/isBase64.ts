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

const notBase64 = /[^A-Z0-9+\/=]/i;

export function isBase64(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === '=');
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isBase64]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsBase64ValidatorDirective, multi: true}]
})

export class IsBase64ValidatorDirective implements Validator {
  @Input() isBase64: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isBase64(control.value) ? null : { isBase64: false };
  }
}