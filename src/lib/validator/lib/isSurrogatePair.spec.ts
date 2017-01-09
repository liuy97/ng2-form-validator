import { isSurrogatePair } from "./isSurrogatePair"
describe('isSurrogatePair', () => {
  it('isSurrogatePair is true', () => expect(isSurrogatePair('\ud801\udc02')).toBe(true));
});

describe('is not isSurrogatePair', () => {
  it('isSurrogatePair is false', () => expect(isSurrogatePair('TEST')).toBe(false));
});
