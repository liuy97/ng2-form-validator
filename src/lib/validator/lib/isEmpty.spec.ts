import {isEmpty} from "./isEmpty"
describe('isEmpty', () => {
  it('isEmpty is true', () => expect(isEmpty('')).toBe(true));
});

describe('is not Email', () => {
  it('isEmpty is false', () => expect(isEmpty('ng2-form-validator')).toBe(false));
});
