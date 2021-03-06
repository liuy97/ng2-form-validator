import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

import { toDate } from './toDate';

/* validator.js@6.2.0, MIT, start */
export function isAfter(str: any, date = String(new Date())) {
  if (typeof str !== 'string') {
    return false;
  }
  if (date === null || typeof date === 'undefined'  || typeof date !== 'string') {
    date = String(new Date());
  }
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original > comparison);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[mustAfter]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsAfterValidatorDirective, multi: true}]
})

export class IsAfterValidatorDirective implements Validator {
  @Input() mustAfter: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isAfter(control.value, this.mustAfter) ? null : { mustAfter: false };
  }
}
