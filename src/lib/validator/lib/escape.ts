/* validator.js@6.2.0, MIT, start */
export function escape(str: any) {
  if (typeof str !== 'string') {
    return str;
  }
  return (str.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#x2F;')
        .replace(/\\/g, '&#x5C;')
        .replace(/`/g, '&#96;'));
}
/* validator.js@6.2.0, MIT, end */
