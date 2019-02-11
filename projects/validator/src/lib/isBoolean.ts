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
export function isBoolean(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isBoolean]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsBooleanValidatorDirective, multi: true}]
})

export class IsBooleanValidatorDirective implements Validator {
  @Input() isBoolean: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isBoolean(control.value) ? null : { isBoolean: false };
  }
}
