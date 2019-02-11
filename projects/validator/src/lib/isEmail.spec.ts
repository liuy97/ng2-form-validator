import {isEmail} from "./isEmail"
describe('isEmail', () => {
  it('email is true', () => expect(isEmail('ng2-form-validator@gmail.com')).toBe(true));
});

describe('is not Email', () => {
  it('email is false', () => expect(isEmail('ng2-form-validator@gmail')).toBe(false));
});
