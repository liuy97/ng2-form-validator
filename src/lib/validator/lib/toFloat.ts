/* based on validator.js@6.2.0, MIT */

export function toFloat(str: any) {
  if (typeof str !== 'string') {
    return str;
  }
  return parseFloat(str);
}
