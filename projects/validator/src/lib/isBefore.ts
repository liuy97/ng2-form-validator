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

export function isBefore(str: any, date = String(new Date())) {
  if (typeof str !== 'string') {
    return false;
  }
  if (date === null || typeof date === 'undefined'  || typeof date !== 'string') {
    date = String(new Date());
  }
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original < comparison);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isBefore]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsBeforeValidatorDirective, multi: true}]
})

export class IsBeforeValidatorDirective implements Validator {
  @Input() isBefore: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isBefore(control.value) ? null : { isBefore: false };
  }
}
