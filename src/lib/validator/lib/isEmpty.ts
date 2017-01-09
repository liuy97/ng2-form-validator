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
export function isEmpty(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return str.length === 0;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isEmpty]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsEmptyValidatorDirective, multi: true}]
})

export class IsEmptyValidatorDirective implements Validator {
  @Input() isEmpty: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isEmpty(control.value) ? null : { isEmpty: false };
  }
}
