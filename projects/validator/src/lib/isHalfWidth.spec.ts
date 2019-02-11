import { isHalfWidth } from "./isHalfWidth"
describe('isHalfWidth', () => {
  it('isHalfWidth is true', () => expect(isHalfWidth('ｵ')).toBe(true));
});

describe('is not isHalfWidth', () => {
  it('isHalfWidth is false', () => expect(isHalfWidth('好')).toBe(false));
});
