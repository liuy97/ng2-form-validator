/* based on validator.js@6.2.0, MIT */

export function toBoolean(str: any, strict: any) {
  if (typeof str !== 'string') {
    return false;
  }
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
