import {isFQDN} from "./isFQDN"
describe('isFQDN', () => {
  it('isFQDN is true', () => expect(isFQDN('google.com', null)).toBe(true));
});

describe('is not isFQDN', () => {
  it('isFQDN is false', () => expect(isFQDN('2a')).toBe(false));
});
