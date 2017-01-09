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
import { toFloat } from './toFloat';

/* validator.js@6.2.0, MIT, start */
export function isDivisibleBy(str: any, num: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return toFloat(str) % parseInt(num, 10) === 0;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isDivisibleBy]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsDivisibleByValidatorDirective, multi: true}]
})

export class IsDivisibleByValidatorDirective implements Validator {
  @Input() isDivisibleBy: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isDivisibleBy(control.value, this.isDivisibleBy) ? null : { isDivisibleBy: false };
  }
}
