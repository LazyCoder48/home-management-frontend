import { HomeFinanceManagementError } from './home-finance-management-error';

describe('HomeFinanceManagementError', () => {
  it('should create an instance', () => {
    expect(new HomeFinanceManagementError('error')).toBeTruthy();
  });
});
