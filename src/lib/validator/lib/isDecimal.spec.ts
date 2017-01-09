import { isDecimal } from "./isDecimal"
describe('isDecimal', () => {
  it('isDecimal is true', () => expect(isDecimal('20')).toBe(true));
});

describe('is not isDecimal', () => {
  it('isDecimal is false', () => expect(isDecimal('ab34')).toBe(false));
});
