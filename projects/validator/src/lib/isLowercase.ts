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
export function isLowercase(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return str === str.toLowerCase();
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isLowercase]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsLowercaseValidatorDirective, multi: true}]
})

export class IsLowercaseValidatorDirective implements Validator {
  @Input() isLowercase: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isLowercase(control.value) ? null : { isLowercase: false };
  }
}
