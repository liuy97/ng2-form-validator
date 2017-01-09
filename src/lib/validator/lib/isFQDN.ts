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
import { merge } from './util/merge';

/* validator.js@6.2.0, MIT, start */
const default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
};

export function isFQDN(str: any, options: any = {}) {
  if (typeof str !== 'string') {
    return false;
  }
  if (options === undefined || options === null || typeof options !== 'object') {
    options = {};
  }
  options = merge(options, default_fqdn_options);

    /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  const parts = str.split('.');
  if (options.require_tld) {
    const tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (let part: any, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
          // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isFQDN]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsFQDNValidatorDirective, multi: true}]
})

export class IsFQDNValidatorDirective implements Validator {
  @Input() isFQDN: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isFQDN(control.value, this.isFQDN) ? null : { isFQDN: false };
  }
}
