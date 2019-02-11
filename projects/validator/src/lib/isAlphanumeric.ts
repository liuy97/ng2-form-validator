import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';
import { alphanumeric } from './alpha';
/* validator.js@6.2.0, MIT, start */

export function isAlphanumeric(str: any, locale = 'en-US') {
  if (typeof str !== 'string') {
    return false;
  }
  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isAlphanumeric]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsAlphanumericValidatorDirective, multi: true}]
})

export class IsAlphanumericValidatorDirective implements Validator {
  @Input() isAlphanumeric: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isAlphanumeric(control.value) ? null : { isAlphanumeric: false };
  }
}
