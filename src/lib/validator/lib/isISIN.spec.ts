import { isISIN } from "./isISIN"
describe('isISIN', () => {
  it('isISIN is true', () => expect(isISIN('US0378331005')).toBe(true));
});

describe('is not isISIN', () => {
  it('isISIN is false', () => expect(isISIN('1-84356-028-')).toBe(false));
});
