import { isISO8601 } from "./isISO8601"
describe('isISO8601', () => {
  it('isISO8601 is true', () => expect(isISO8601('19810405')).toBe(true));
});

describe('is not isISO8601', () => {
  it('isISO8601 is false', () => expect(isISO8601('19810405-')).toBe(false));
});
