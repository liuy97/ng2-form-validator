/* based on validator.js@6.2.0, MIT */
export function matches(str: any, pattern: any, modifiers: any) {
  if (typeof str !== 'string') {
    return str;
  }
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
