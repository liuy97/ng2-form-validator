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
const decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

export function isDecimal(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return str !== '' && decimal.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isDecimal]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsDecimalValidatorDirective, multi: true}]
})

export class IsDecimalValidatorDirective implements Validator {
  @Input() isDecimal: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isDecimal(control.value) ? null : { isDecimal: false };
  }
}
