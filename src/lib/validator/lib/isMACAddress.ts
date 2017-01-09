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
const macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

export function isMACAddress(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return macAddress.test(str);
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isMACAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsMACAddressValidatorDirective, multi: true}]
})

export class IsMACAddressValidatorDirective implements Validator {
  @Input() isMACAddress: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isMACAddress(control.value) ? null : { isMACAddress: false };
  }
}
