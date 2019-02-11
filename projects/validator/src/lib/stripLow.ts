/* based on validator.js@6.2.0, MIT */

import { blacklist } from './blacklist';

export function stripLow(str: any, keep_new_lines: any) {
  if (typeof str !== 'string') {
    return str;
  }
  const chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return blacklist(str, chars);
}
