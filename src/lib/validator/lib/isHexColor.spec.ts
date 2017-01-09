import { isHexColor } from "./isHexColor"
describe('isHexColor', () => {
  it('isHexColor is true', () => expect(isHexColor('#ff0000')).toBe(true));
});

describe('is not isHexColor', () => {
  it('isHexColor is false', () => expect(isHexColor('2g')).toBe(false));
});
