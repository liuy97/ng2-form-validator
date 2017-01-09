import {isAlphanumeric} from "./isAlphanumeric"
describe('isAlphanumeric', () => {
  it('isAlphanumeric is true', () => expect(isAlphanumeric('xx')).toBe(true));
});

describe('is not isAlphanumeric', () => {
  it('isAlphanumeric is false', () => expect(isAlphanumeric('2012.')).toBe(false));
});
