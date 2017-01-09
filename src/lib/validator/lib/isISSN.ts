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
const issn = '^\\d{4}-?\\d{3}[\\dX]$';

export function isISSN(str: any, options: any = {}) {
  if (typeof str !== 'string') {
    return false;
  }
  let testIssn: any = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  const issnDigits = str.replace('-', '');
  let position = 8;
  let checksum = 0;
  for (const digit of issnDigits) {
    const digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
    checksum += digitValue * position;
    --position;
  }
  return checksum % 11 === 0;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isISSN]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsISSNValidatorDirective, multi: true}]
})

export class IsISSNValidatorDirective implements Validator {
  @Input() isISSN: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return isISSN(control.value) ? null : { isISSN: false };
  }
}