import { isVariableWidth } from "./isVariableWidth"
describe('isVariableWidth', () => {
  it('isVariableWidth is true', () => expect(isVariableWidth('好ｵ')).toBe(true));
});

describe('is not isVariableWidth', () => {
  it('isVariableWidth is false', () => expect(isVariableWidth('test')).toBe(false));
});
