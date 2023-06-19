export class Account {
  constructor(logger) {
    this.logger = logger;
  }
  deposit(amount) {
    return amount;
  }
  withdraw(amount) {
    return amount;
  }
  printStatement() {
    this.logger.log("DATE | AMOUNT | BALANCE");
    this.logger.log(`24/01/2012 | ${Account.withdraw(amount)}`);
  }
}
export class Logger {
  log(message) {
    console.log(message);
  }
}
