import { isCreditCard } from "./isCreditCard"
describe('isCreditCard', () => {
  it('isCreditCard is true', () => expect(isCreditCard('343263271250565')).toBe(true));
});

describe('is not isCreditCard', () => {
  it('isCreditCard is false', () => expect(isCreditCard('isCreditCard')).toBe(false));
});
