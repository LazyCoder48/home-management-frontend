import { UserAuthError } from './user-auth-error';

describe('UserAuthError', () => {
  it('should create an instance', () => {
    expect(new UserAuthError('error')).toBeTruthy();
  });
});
