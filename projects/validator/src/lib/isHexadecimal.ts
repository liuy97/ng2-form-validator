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
const hexadecimal = /^[0-9A-F]+$/i;

export function isHexadecimal(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return hexadecimal.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isHexadecimal]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsHexadecimalValidatorDirective, multi: true}]
})

export class IsHexadecimalValidatorDirective implements Validator {
  @Input() isHexadecimal: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isHexadecimal(control.value) ? null : { isHexadecimal: false };
  }
}
