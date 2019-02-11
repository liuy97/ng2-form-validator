import { isISBN } from "./isISBN"
describe('isISBN', () => {
  it('isISBN is true', () => expect(isISBN('1-84356-028-3')).toBe(true));
});

describe('is not isISBN', () => {
  it('isISBN is false', () => expect(isISBN('1-84356-028-')).toBe(false));
});
