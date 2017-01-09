import {
  Directive,
  Input,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule,
  Validator,
  NG_VALIDATORS,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';

import { toString } from './util/toString';

/* validator.js@6.2.0, MIT, start */
export function contains(str: any, elem: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return str.indexOf(toString(elem)) >= 0;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[contains]',
  providers: [{provide: NG_VALIDATORS, useExisting: ContainsValidatorDirective, multi: true}]
})

export class ContainsValidatorDirective implements Validator {
  @Input() contains: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return contains(control.value, this.contains) ? null : { contains: false };
  }
}
