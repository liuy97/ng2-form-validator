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
export const halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

export function isHalfWidth(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return halfWidth.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isHalfWidth]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsHalfWidthValidatorDirective, multi: true}]
})

export class IsHalfWidthValidatorDirective implements Validator {
  @Input() isHalfWidth: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isHalfWidth(control.value) ? null : { isHalfWidth: false };
  }
}
