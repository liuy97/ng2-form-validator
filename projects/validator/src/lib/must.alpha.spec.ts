import {isAlpha} from "./must.alpha"
describe('isAlpha', () => {
  it('isAlpha is true', () => expect(isAlpha('xx')).toBe(true));
});

describe('is not isAlpha', () => {
  it('isAlpha is false', () => expect(isAlpha('2012')).toBe(false));
});
