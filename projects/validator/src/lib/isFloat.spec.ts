import {isFloat} from "./isFloat"
describe('isFloat', () => {
  it('isFloat is true', () => expect(isFloat('1', null)).toBe(true));
});

describe('is not isFloat', () => {
  it('isFloat is false', () => expect(isFloat('2a', null)).toBe(false));
});
