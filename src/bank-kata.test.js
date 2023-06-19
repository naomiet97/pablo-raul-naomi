import { describe, it, expect } from "vitest";
import { Account, Logger } from "./bank-kata";

class LoggerFake extends Logger {
  constructor() {
    super();
    this.messages = [];
  }

  log(message) {
    this.messages.push(message);
  }
}

describe("Account", () => {
  it("Prints statement", () => {
    const logger = new LoggerFake();
    const account = new Account(logger);

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);

    account.printStatement();
    expect(logger.messages).toEqual([
      "DATE | AMOUNT | BALANCE",
      "24/01/2012 | 500.00 | 2500.00",
      "23/01/2012 | 2000.00 | 3000.00",
      "20/01/2012 | 1000.00 | 1000.00",
    ]);
  });
});
