import { isUUID } from "./isUUID"
describe('isUUID', () => {
  it('isUUID is true', () => expect(isUUID('f0e0faa2-d68b-11e6-bf26-cec0c932ce01')).toBe(true));
});

describe('is not isUUID', () => {
  it('isUUID is false', () => expect(isUUID('test')).toBe(false));
});
