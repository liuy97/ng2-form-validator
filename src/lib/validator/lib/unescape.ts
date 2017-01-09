/* based on validator.js@6.2.0, MIT */

export function unescape(str: any) {
  if (typeof str !== 'string') {
    return str;
  }
  return (str.replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#x2F;/g, '/')
        .replace(/&#96;/g, '`'));
}
