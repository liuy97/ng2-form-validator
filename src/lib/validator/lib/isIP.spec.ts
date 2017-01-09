import { isIP } from "./isIP"
describe('isIP', () => {
  it('isIP is true', () => expect(isIP('10.0.0.1')).toBe(true));
});

describe('is not isIP', () => {
  it('isIP is false', () => expect(isIP('410.0.0.1')).toBe(false));
});
