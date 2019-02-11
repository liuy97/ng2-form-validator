import { isIn } from "./isIn"
describe('isIn', () => {
  it('isIn is true', () => expect(isIn('ab', ['ab', 'bc'])).toBe(true));
});

describe('is not isIn', () => {
  it('isIn is false', () => expect(isIn('ab', ['adb', 'bc'])).toBe(false));
});
