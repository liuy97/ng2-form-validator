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
/* eslint-disable max-len */
const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
/* eslint-enable max-len */

export function isCreditCard(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  const sanitized = str.replace(/[^0-9]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  let sum = 0;
  let digit: any;
  let tmpNum: any;
  let shouldDouble: any;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += ((tmpNum % 10) + 1);
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!((sum % 10) === 0 ? sanitized : false);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isCreditCard]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsCreditCardValidatorDirective, multi: true}]
})

export class IsCreditCardValidatorDirective implements Validator {
  @Input() isCreditCard: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isCreditCard(control.value) ? null : { isCreditCard: false };
  }
}
