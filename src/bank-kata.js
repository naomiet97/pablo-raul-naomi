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
    this.logger.log("DATE | AMOUNT | BALANCE");
    this.logger.log(
      `${statement1.date} | ${Math.abs(statement1.amount).toFixed(2)} | 2500.00`
    );
    this.logger.log(
      `${statement2.date} | ${statement2.amount.toFixed(2)} | 3000.00`
    );
    this.logger.log(
      `${statement3.date} | ${statement3.amount.toFixed(2)} | 1000.00`
    );
  }
  
}

const statement1 = {
  date: "24/01/2012",
  amount: -500,
};

const statement2 = {
  date: "23/01/2012",
  amount: 2000,
};

const statement3 = {
  date: "20/01/2012",
  amount: 1000,
};

let statements = [statement1, statement2, statement3];
console.log(statements);
let amounts = [];

function getTransactions(statements) {
  for (let i = 0; i < statements.length - 1; i++) {
    amounts.push(statements[i].amount);
  }
}

let balance = 0;

function getBalance(amount) {
  for (let i = 0; i < amount.length - 1; i++) {
    balance += amount[i];
  }
}

getTransactions(statements);

getBalance(balance);
