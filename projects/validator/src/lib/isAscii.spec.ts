import {isAscii} from "./isAscii"
describe('isAscii', () => {
  it('isAscii is true', () => expect(isAscii('xx')).toBe(true));
});
