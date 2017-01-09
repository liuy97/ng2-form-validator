import { isMD5 } from "./isMD5"
describe('isMD5', () => {
  it('isMD5 is true', () => expect(isMD5('d41d8cd98f00b204e9800998ecf8427e')).toBe(true));
});

describe('is not isMD5', () => {
  it('isMD5 is false', () => expect(isMD5('TEST')).toBe(false));
});
