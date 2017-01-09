import { isUppercase } from "./isUppercase"
describe('isUppercase', () => {
  it('isUppercase is true', () => expect(isUppercase('TEST')).toBe(true));
});

describe('is not isUppercase', () => {
  it('isUppercase is false', () => expect(isUppercase('test')).toBe(false));
});
