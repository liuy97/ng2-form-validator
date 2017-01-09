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
import { toString } from './util/toString';

/* validator.js@6.2.0, MIT, start */
export function isIn(str: any, options: any) {
  if (typeof str !== 'string') {
    return false;
  }
  let i: any;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    const array: any[] = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = toString(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if (typeof options === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isIn]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsInValidatorDirective, multi: true}]
})

export class IsInValidatorDirective implements Validator {
  @Input() isIn: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isIn(control.value, this.isIn) ? null : { isIn: false };
  }
}
