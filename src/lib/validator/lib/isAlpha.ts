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
import { alpha } from './alpha';
/* validator.js@6.2.0, MIT, start */

export function isAlpha(str: any, locale = 'en-US') {
  if (typeof str !== 'string') {
    return false;
  }
  if (locale === null || typeof locale === 'undefined'  || typeof locale !== 'string') {
    locale = 'en-US';
  }
  if (locale in alpha) {
    return alpha[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isAlpha]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsAlphaValidatorDirective, multi: true}]
})

export class IsAlphaValidatorDirective implements Validator {
  @Input() isAlpha: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isAlpha(control.value) ? null : { isAlpha: false };
  }
}
