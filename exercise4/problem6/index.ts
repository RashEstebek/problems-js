// Update it as much as you want, just don't change the names

export class BankAccount {
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

export class FedexAccount {
  
    sendMail(recipient: string){
      console.log(`Hello, ${recipient}, how are you?`)
    }

    recieveMail(sender: string) {
      console.log(`I'm sending you this mail. Your dear ${sender}`)
    }
}

export class KazPostAccount extends BankAccount {
    sendMail(recipient: string){
      console.log(`Hello, ${recipient}, how are you via Kazpost?`)
    }

    recieveMail(sender: string) {
      console.log(`I'm sending you this mail. Your dear ${sender}`)
    }
}

export function withdrawMoney(accounts: (BankAccount | KazPostAccount)[], amount: number) {
  for (const account of accounts) {
    console.log(account.withdraw(amount));
  }
}

export function sendLetterTo(accounts: (FedexAccount | KazPostAccount)[], recipient: string) {
  for (const account of accounts) {
    account.sendMail(recipient);
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

const normanOsborne = new BankAccount();
const peterParker = new FedexAccount();
const auntMay = new KazPostAccount();

withdrawMoney([normanOsborne, auntMay], 10); // no error
sendLetterTo([peterParker, auntMay], "Mary Jane"); // no error
// withdrawMoney([peterParker, auntMay], 10); // peterParker error
=======
>>>>>>> b30e4c6347463726cae2f3b2120d265d95e21ba2
=======
>>>>>>> 78bd007deddd7fb8ba5fcf95636a3c40cbed2d8c
