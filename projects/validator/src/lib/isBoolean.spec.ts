import { isBoolean } from "./isBoolean"
describe('isBoolean', () => {
  it('isBoolean is true', () => expect(isBoolean('false')).toBe(true));
});

describe('is not isBoolean', () => {
  it('isBoolean is false', () => expect(isBoolean('2')).toBe(false));
});
