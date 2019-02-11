import { isMultibyte } from "./isMultibyte"
describe('isMultibyte', () => {
  it('isMultibyte is true', () => expect(isMultibyte('好')).toBe(true));
});

describe('is not isMultibyte', () => {
  it('isMultibyte is false', () => expect(isMultibyte('TEST')).toBe(false));
});
