import { isJSON } from "./isJSON"
describe('isJSON', () => {
  it('isJSON is true', () => expect(isJSON('{"test":1}')).toBe(true));
});

describe('is not isJSON', () => {
  it('isJSON is false', () => expect(isJSON('test:1')).toBe(false));
});
