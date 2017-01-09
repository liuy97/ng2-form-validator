/* based on validator.js@6.2.0, MIT */

export function toDate(date: any) {
  if (typeof date !== 'string') {
    return null;
  }
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
