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
const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

export function isHexColor(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return hexcolor.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isHexColor]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsHexColorValidatorDirective, multi: true}]
})

export class IsHexColorValidatorDirective implements Validator {
  @Input() isHexColor: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isHexColor(control.value) ? null : { isHexColor: false };
  }
}
