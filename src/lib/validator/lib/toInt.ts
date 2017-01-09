/* based on validator.js@6.2.0, MIT */

export function toInt(str: any, radix: any) {
  if (typeof str !== 'string') {
    return str;
  }
  return parseInt(str, radix || 10);
}
