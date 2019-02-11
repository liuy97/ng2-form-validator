import { isFullWidth } from "./isFullWidth"
describe('isFullWidth', () => {
  it('isFullWidth is true', () => expect(isFullWidth('好')).toBe(true));
});

describe('is not isFullWidth', () => {
  it('isFullWidth is false', () => expect(isFullWidth('2a')).toBe(false));
});
