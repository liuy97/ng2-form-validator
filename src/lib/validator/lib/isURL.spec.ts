import { isURL } from "./isURL"
describe('isURL', () => {
  it('isURL is true', () => expect(isURL('http://test.com')).toBe(true));
});

describe('is not isURL', () => {
  it('isURL is false', () => expect(isURL('test')).toBe(false));
});
