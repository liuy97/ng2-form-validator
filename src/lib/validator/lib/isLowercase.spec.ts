import { isLowercase } from "./isLowercase"
describe('isLowercase', () => {
  it('isLowercase is true', () => expect(isLowercase('test')).toBe(true));
});

describe('is not isLowercase', () => {
  it('isLowercase is false', () => expect(isLowercase('TEST')).toBe(false));
});
