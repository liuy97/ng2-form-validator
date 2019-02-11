/* based on validator.js@6.2.0, MIT */

import { rtrim } from './rtrim';
import { ltrim } from './ltrim';

export function trim(str: any, chars: any) {
  return rtrim(ltrim(str, chars), chars);
}
