import {isBase64} from "./isBase64"
describe('isBase64', () => {
  it('isBase64 is true', () => expect(isBase64('c3VyZS4=')).toBe(true));
});

describe('is not isBase64', () => {
  it('isBase64 is false', () => expect(isBase64('c3VyZS4=.')).toBe(false));
});
