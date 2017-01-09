/* based on validator.js@6.2.0, MIT */
export function ltrim(str: any, chars: any) {
  if (typeof str !== 'string') {
    return str;
  }
  const pattern = chars ? new RegExp(`^[${chars}]+`, 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
