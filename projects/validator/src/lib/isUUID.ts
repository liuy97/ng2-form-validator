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
const uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

export function isUUID(str: any, version = 'all') {
  if (typeof str !== 'string') {
    return false;
  }
  const pattern = uuid[version];
  return pattern && pattern.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isUUID]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsUUIDValidatorDirective, multi: true}]
})

export class IsUUIDValidatorDirective implements Validator {
  @Input() isUUID: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isUUID(control.value) ? null : { isUUID: false };
  }
}
