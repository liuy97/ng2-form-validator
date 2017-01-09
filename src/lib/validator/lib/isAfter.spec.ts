import {isAfter} from "./isAfter"
describe('isAfter', () => {
  it('isAfter is true', () => expect(isAfter('3017-1-1', null)).toBe(true));
});

describe('is not isAfter', () => {
  it('isAfter is false', () => expect(isAfter('2012-1-1', null)).toBe(false));
});
