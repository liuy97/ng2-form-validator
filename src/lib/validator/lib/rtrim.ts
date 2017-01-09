/* based on validator.js@6.2.0, MIT */

export function rtrim(str: any, chars: any) {
  if (typeof str !== 'string') {
    return str;
  }
  const pattern = chars ? new RegExp(`[${chars}]`) : /\s/;

  let idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
