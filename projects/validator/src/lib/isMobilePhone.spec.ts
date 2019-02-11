import { isMobilePhone } from "./isMobilePhone"
describe('isMobilePhone', () => {
  it('isMobilePhone is true', () => expect(isMobilePhone('+13608853019')).toBe(true));
});

describe('is not isMobilePhone', () => {
  it('isMobilePhone is false', () => expect(isMobilePhone('TEST')).toBe(false));
});
