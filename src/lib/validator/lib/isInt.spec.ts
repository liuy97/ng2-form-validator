import { isInt } from "./isInt"
describe('isInt', () => {
  it('isInt is true', () => expect(isInt('1')).toBe(true));
});

describe('is not isInt', () => {
  it('isInt is false', () => expect(isInt('ab')).toBe(false));
});
