import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
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
  selector: '[mustAlpha]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsAlphaValidatorDirective, multi: true}]
})

export class IsAlphaValidatorDirective implements Validator {
  @Input() mustAlpha: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isAlpha(control.value) ? null : { mustAlpha: {value: control.value} };
  }
}
