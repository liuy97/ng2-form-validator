import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';
import { toString } from './util/toString';

/* validator.js@6.2.0, MIT, start */
const isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;


export function isISIN(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  if (!isin.test(str)) {
    return false;
  }

  const checksumStr = str.replace(/[A-Z]/g, (character: any) => (toString(parseInt(character, 36))));

  let sum = 0;
  let digit: any;
  let tmpNum: any;
  let shouldDouble = true;
  for (let i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isISIN]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsISINValidatorDirective, multi: true}]
})

export class IsISINValidatorDirective implements Validator {
  @Input() isISIN: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isISIN(control.value) ? null : { isISIN: false };
  }
}
