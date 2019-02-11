/* based on validator.js@6.2.0, MIT */
export function blacklist(str: string, chars: string) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(new RegExp(`[${chars}]+`, 'g'), '');
}
