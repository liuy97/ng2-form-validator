import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

import { isHexadecimal } from './isHexadecimal';

/* validator.js@6.2.0, MIT, start */
export function isMongoId(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return isHexadecimal(str) && str.length === 24;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isMongoId]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsMongoIdValidatorDirective, multi: true}]
})

export class IsMongoIdValidatorDirective implements Validator {
  @Input() isMongoId: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isMongoId(control.value) ? null : { isMongoId: false };
  }
}
