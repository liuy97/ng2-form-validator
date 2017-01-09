import { isHexadecimal } from "./isHexadecimal"
describe('isHexadecimal', () => {
  it('isHexadecimal is true', () => expect(isHexadecimal('2a')).toBe(true));
});

describe('is not isHexadecimal', () => {
  it('isHexadecimal is false', () => expect(isHexadecimal('2g')).toBe(false));
});
