export class HomeFinanceManagementError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HomeFinanceManagementError.prototype);
    // Set the name of the error class
    this.name = 'Home Finance Management Error';

  }
}
