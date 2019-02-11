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
export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

export function isFullWidth(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return fullWidth.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isFullWidth]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsFullWidthValidatorDirective, multi: true}]
})

export class IsFullWidthValidatorDirective implements Validator {
  @Input() isFullWidth: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isFullWidth(control.value) ? null : { isFullWidth: false };
  }
}
