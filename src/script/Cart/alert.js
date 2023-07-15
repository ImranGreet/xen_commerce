export class AlertMessage {
  constructor(message) {
    this.message = message;
  }
  addTodesiredPurchaseStore() {
    return `Product already in your ${this.message} List`;
  }
  removeFromdesiredPurchaseStore() {
    return `Product removed from ${this.message} List successfully`;
  }
  static productMustBeObject() {
    return this.message;
  }
}
