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
export function isJSON(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    const obj = JSON.parse(str);
    return !!obj && typeof obj === 'object';
  } catch (e) { /* ignore */ }
  return false;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isJSON]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsJSONValidatorDirective, multi: true}]
})

export class IsJSONValidatorDirective implements Validator {
  @Input() isJSON: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isJSON(control.value) ? null : { isJSON: false };
  }
}
