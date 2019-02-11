import {
  Directive,
  Input
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';
import { iso8601 } from './isISO8601';

/* validator.js@6.2.0, MIT, start */
function getTimezoneOffset(str: any) {
  const iso8601Parts = str.match(iso8601);
  let timezone: any, sign: any, hours: any, minutes: any;
  if (!iso8601Parts) {
    str = str.toLowerCase();
    timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
    if (!timezone) {
      return str.indexOf('gmt') !== -1 ? 0 : null;
    }
    sign = timezone[1];
    let offset = timezone[2];
    if (offset.length === 3) {
      offset = `0${offset}`;
    }
    if (offset.length <= 2) {
      hours = 0;
      minutes = parseInt(offset, 10);
    } else {
      hours = parseInt(offset.slice(0, 2), 10);
      minutes = parseInt(offset.slice(2, 4), 10);
    }
  } else {
    timezone = iso8601Parts[21];
    if (!timezone) {
      // if no hour/minute was provided, the date is GMT
      return !iso8601Parts[12] ? 0 : null;
    }
    if (timezone === 'z' || timezone === 'Z') {
      return 0;
    }
    sign = iso8601Parts[22];
    if (timezone.indexOf(':') !== -1) {
      hours = parseInt(iso8601Parts[23], 10);
      minutes = parseInt(iso8601Parts[24], 10);
    } else {
      hours = 0;
      minutes = parseInt(iso8601Parts[23], 10);
    }
  }
  return ((hours * 60) + minutes) * (sign === '-' ? 1 : -1);
}

export function isDate(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  let normalizedDate: any = new Date(Date.parse(str));
  if (isNaN(normalizedDate)) {
    return false;
  }

  // normalizedDate is in the user's timezone. Apply the input
  // timezone offset to the date so that the year and day match
  // the input
  const timezoneOffset = getTimezoneOffset(str);
  if (timezoneOffset !== null) {
    const timezoneDifference = normalizedDate.getTimezoneOffset() - timezoneOffset;
    normalizedDate = new Date(normalizedDate.getTime() + (60000 * timezoneDifference));
  }

  const day: any = String(normalizedDate.getDate());
  let dayOrYear: any, dayOrYearMatches: any, year: any;
  // check for valid double digits that could be late days
  // check for all matches since a string like '12/23' is a valid date
  // ignore everything with nearby colons
  dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^T:\d]|$)/g);
  if (!dayOrYearMatches) {
    return true;
  }
  dayOrYear = dayOrYearMatches.map((digitString: any) => (
    digitString.match(/\d+/g)[0]
  )).join('/');

  year = String(normalizedDate.getFullYear()).slice(-2);
  if (dayOrYear === day || dayOrYear === year) {
    return true;
  } else if ((dayOrYear === (`${day / year}`)) || (dayOrYear === (`${year / day}`))) {
    return true;
  }
  return false;
}
/* validator.js@6.2.0, MIT, end */

@Directive({
  selector: '[isDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsDateValidatorDirective, multi: true}]
})

export class IsDateValidatorDirective implements Validator {
  @Input() isDate: any;

  validate(control: AbstractControl): { [key: string]: any } {
    return isDate(control.value) ? null : { isDate: false };
  }
}
