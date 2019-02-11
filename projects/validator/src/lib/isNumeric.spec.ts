import { isNumeric } from "./isNumeric"
describe('isNumeric', () => {
  it('isNumeric is true', () => expect(isNumeric('12')).toBe(true));
});

describe('is not isNumeric', () => {
  it('isNumeric is false', () => expect(isNumeric('TEST')).toBe(false));
});
