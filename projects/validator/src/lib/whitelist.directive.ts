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
export function isWhitelisted(str: any, chars: any) {
  if (typeof str !== 'string') {
    return false;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[whitelist]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsWhitelistedValidatorDirective, multi: true}]
})

export class IsWhitelistedValidatorDirective implements Validator {
  @Input() whitelist: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isWhitelisted(control.value, this.whitelist) ? null : { whitelist: false };
  }
}