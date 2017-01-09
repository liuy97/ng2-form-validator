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
const numeric = /^[-+]?[0-9]+$/;

export function isNumeric(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return numeric.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isNumeric]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsNumericValidatorDirective, multi: true}]
})

export class IsNumericValidatorDirective implements Validator {
  @Input() isNumeric: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isNumeric(control.value) ? null : { isNumeric: false };
  }
}
