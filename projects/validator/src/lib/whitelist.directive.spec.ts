import { isWhitelisted } from "./whitelist.directive"
describe('isVariableWidth', () => {
  it('isWhitelisted is true', () => expect(isWhitelisted('aa', 'aabb')).toBe(true));
});

describe('is not isWhitelisted', () => {
  it('isWhitelisted is false', () => expect(isWhitelisted('test', 'aabb')).toBe(false));
});
