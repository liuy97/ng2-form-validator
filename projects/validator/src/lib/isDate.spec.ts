import { isDate } from "./isDate"
describe('isDate', () => {
  it('isDate is true', () => expect(isDate('2012-1-1')).toBe(true));
});

describe('is not isDate', () => {
  it('isDate is false', () => expect(isDate('ab34')).toBe(false));
});
