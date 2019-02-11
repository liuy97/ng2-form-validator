import { isMongoId } from "./isMongoId"
describe('isMongoId', () => {
  it('isMongoId is true', () => expect(isMongoId('123456789012345678901234')).toBe(true));
});

describe('is not isMongoId', () => {
  it('isMongoId is false', () => expect(isMongoId('TEST')).toBe(false));
});
