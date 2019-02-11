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
const md5 = /^[a-f0-9]{32}$/;

export function isMD5(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return md5.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isMD5]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsMD5ValidatorDirective, multi: true}]
})

export class IsMD5ValidatorDirective implements Validator {
  @Input() isMD5: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isMD5(control.value) ? null : { isMD5: false };
  }
}
