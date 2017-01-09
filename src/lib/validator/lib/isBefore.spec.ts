import {isBefore} from "./isBefore"
describe('isBefore', () => {
  it('isBefore is true', () => expect(isBefore('2012-1-1')).toBe(true));
});

describe('is not isBefore', () => {
  it('isBefore is false', () => expect(isBefore('3017-1-1', null)).toBe(false));
});
