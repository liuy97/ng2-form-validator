import { isCurrency } from "./isCurrency"
describe('isCurrency', () => {
  it('isCurrency is true', () => expect(isCurrency('$34')).toBe(true));
});

describe('is not isCurrency', () => {
  it('isCurrency is false', () => expect(isCurrency('34$')).toBe(false));
});
