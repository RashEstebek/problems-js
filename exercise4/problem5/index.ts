class BankAccount {
    #balance: number;

    constructor() {
        this.#balance = 0;
    }

    withdraw(money: number) {
        if (this.#balance >= money) {
            this.#balance -= money;
            return this.#balance;
        } else {
            return -1
        }
        
    }

    deposit(money: number) {
        if (money <= 1000000) {
            this.#balance += money;
            return this.#balance;
        } else {
            return -1
        }
    }
    
}

const account = new BankAccount();

console.log(account.withdraw(100)) // -1
console.log(account.deposit(100)) // 100
console.log(account.withdraw(10)) // 90
console.log(account.deposit(10_000_000)) // -1
console.log(account.withdraw(10)) // 80

export default BankAccount;
