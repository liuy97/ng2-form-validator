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
// from http://goo.gl/0ejHHW
export const iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

export function isISO8601(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return iso8601.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isISO8601]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsISO8601ValidatorDirective, multi: true}]
})

export class IsISO8601ValidatorDirective implements Validator {
  @Input() isISO8601: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isISO8601(control.value) ? null : { isISO8601: false };
  }
}
