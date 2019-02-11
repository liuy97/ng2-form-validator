import { merge } from './util/merge';
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
const dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

export function isDataURI(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return dataURI.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isDataURI]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsDataURIValidatorDirective, multi: true}]
})

export class IsDataURIValidatorDirective implements Validator {
  @Input() isDataURI: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isDataURI(control.value) ? null : { isDataURI: false };
  }
}
