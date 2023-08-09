// interestRate = 2.5

// balance = 100_000

//newBalance = balance + Interest
//percent : per-century
// newBalance = Balance + (balance * (interestRate/100))

let newBalance = 0;
let balance = 100_000;
let interestRate = 2.5;

for(i = 1; i <= 10; i++) {
    newBalance = balance + (balance * (interestRate/100));
    balance = newBalance;

}console.log(newBalance);
