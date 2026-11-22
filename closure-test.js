function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${balance}`);
    },
    getBalance: function () {
      console.log(`Current Balance: ${balance}`);
      return balance;
    },
  };
}

const myaccount = createBankAccount(100);
myaccount.deposit(30);
myaccount.getBalance();
