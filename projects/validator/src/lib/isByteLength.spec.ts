import { isByteLength } from "./isByteLength"
describe('isByteLength', () => {
  it('isByteLength is true', () => expect(isByteLength('bytes', {min: 1, max: 10})).toBe(true));
});

describe('is not isByteLength', () => {
  it('isByteLength is false', () => expect(isByteLength('2', {min: 4, max: 10})).toBe(false));
});
