/**
 *
 *
 * BALANCE: realizar método p/cálculos y luego convertir a string
 */

export class Logger {
  log(message) {
    console.log(message);
  }
}
export class Account {
  constructor(logger) {
    this.logger = logger;
    this.statements = [];
    this.transactions = [];
  }
  deposit(amount) {
    return amount;
  }
  withdraw(amount) {
    return amount;
  }
  printStatement() {
    const statement1 = {
      date: "24/01/2012",
      amount: 500,
      balance: 2500,
    };

    const statement2 = {
      date: "23/01/2012",
      amount: 2000,
      balance: 3000,
    };

    const statement3 = {
      date: "20/01/2012",
      amount: 1000,
      balance: 1000,
    };

    let statements = [statement1, statement2, statement3];
    this.logger.log("DATE | AMOUNT | BALANCE");

    for (const statement of statements) {
      this.logger.log(
        `${statement.date} | ${statement.amount.toFixed(
          2
        )} | ${statement.balance.toFixed(2)}`
      );
    }
  }
}

// console.log(statements);
// let amounts = [];

// function getTransactions(statements) {
//   for (let i = 0; i < statements.length - 1; i++) {
//     amounts.push(statements[i].amount);
//   }
// }

// let balance = 0;

// function getBalance(amount) {
//   for (let i = 0; i < amount.length - 1; i++) {
//     balance += amount[i];
//   }
// }

// getTransactions(statements);

// getBalance(balance);
