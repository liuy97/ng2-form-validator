import { isLength } from "./isLength"
describe('isLength', () => {
  it('isLength is true', () => expect(isLength('{"test":1}')).toBe(true));
});

describe('is not isLength', () => {
  it('isLength is false', () => expect(isLength('', 1)).toBe(false));
});
