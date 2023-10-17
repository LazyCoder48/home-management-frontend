export class UserAuthError  extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, UserAuthError.prototype);
    // Set the name of the error class
    this.name = 'User Authorization Error';

  }
}
