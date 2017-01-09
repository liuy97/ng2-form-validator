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
const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export function isSurrogatePair(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return surrogatePair.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isSurrogatePair]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsSurrogatePairValidatorDirective, multi: true}]
})

export class IsSurrogatePairValidatorDirective implements Validator {
  @Input() isSurrogatePair: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isSurrogatePair(control.value) ? null : { isSurrogatePair: false };
  }
}
