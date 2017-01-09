/* based on validator.js@6.2.0, MIT */
export function merge(obj: any = { }, defaults: any) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
