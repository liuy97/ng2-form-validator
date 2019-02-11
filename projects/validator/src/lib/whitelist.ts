/* based on validator.js@6.2.0, MIT */

export function whitelist(str: any, chars: any) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}
