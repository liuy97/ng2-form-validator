import { isISSN } from "./isISSN"
describe('isISSN', () => {
  it('isISSN is true', () => expect(isISSN('0317-8471')).toBe(true));
});

describe('is not isISSN', () => {
  it('isISSN is false', () => expect(isISSN('ISSN 4444-4444-')).toBe(false));
});
