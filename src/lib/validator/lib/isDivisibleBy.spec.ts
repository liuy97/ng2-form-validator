import { isDivisibleBy } from "./isDivisibleBy"
describe('isDivisibleBy', () => {
  it('isDivisibleBy is true', () => expect(isDivisibleBy('20', 4)).toBe(true));
});

describe('is not isDivisibleBy', () => {
  it('isDivisibleBy is false', () => expect(isDivisibleBy('20', 7)).toBe(false));
});
