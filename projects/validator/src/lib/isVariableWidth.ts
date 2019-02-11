import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';

/* validator.js@6.2.0, MIT, start */
export function isVariableWidth(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return fullWidth.test(str) && halfWidth.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isVariableWidth]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsVariableWidthValidatorDirective, multi: true}]
})

export class IsVariableWidthValidatorDirective implements Validator {
  @Input() isVariableWidth: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isVariableWidth(control.value) ? null : { isVariableWidth: false };
  }
}
