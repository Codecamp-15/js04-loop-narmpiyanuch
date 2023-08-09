
// PATTERN RECOGNITION
// (1152 - 2) / 10 => n = 115
// (115 - 5 ) / 10 => n = 11
// (11 - 1) / 10 => n = 1
// (1 - 1) / 10 => n = 0

let n = +prompt('number:');

let count = 0;
let sum = 0;
while (n) {
    let remainder = n % 10;
    n = (n-remainder) / 10;
    sum += remainder;
    count++;
}

console.log(count, sum);