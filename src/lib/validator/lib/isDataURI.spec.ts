import { isDataURI } from "./isDataURI"
describe('isDataURI', () => {
  it('isDataURI is true', () => expect(isDataURI('data:image/png;base64,c3VyZS4=')).toBe(true));
});

describe('is not isDataURI', () => {
  it('isDataURI is false', () => expect(isDataURI('ab34')).toBe(false));
});
