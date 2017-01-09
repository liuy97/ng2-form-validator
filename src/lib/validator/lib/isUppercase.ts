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

/* validator.js@6.2.0, MIT, start */
export function isUppercase(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return str === str.toUpperCase();
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isUppercase]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsUppercaseValidatorDirective, multi: true}]
})

export class IsUppercaseValidatorDirective implements Validator {
  @Input() isUppercase: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isUppercase(control.value) ? null : { isUppercase: false };
  }
}
