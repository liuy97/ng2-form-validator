import { isMACAddress } from "./isMACAddress"
describe('isMACAddress', () => {
  it('isMACAddress is true', () => expect(isMACAddress('11:22:33:44:55:66')).toBe(true));
});

describe('is not isMACAddress', () => {
  it('isMACAddress is false', () => expect(isMACAddress('TEST')).toBe(false));
});
