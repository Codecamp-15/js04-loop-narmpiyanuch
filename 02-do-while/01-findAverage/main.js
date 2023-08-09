let num;
let isEmpty;
let isNan;
let zeroNum;
let sum = 0;
let count = 0;

do {
    num = prompt('Enter number:') || '';
    isEmpty = num.trim() === '';
    isNan = isNaN(num);
    zeroNum = Number(num) === 0 ;

    if (isEmpty || isNan) {
        alert('Stop counting');
    } else if (zeroNum || +num < 0) {
        alert('Stop counting');
    } else if (+num > 0) {
        sum += +num;
        count++;
        avg = sum / count;
    }
} while (+num > 0);

alert(`sum is ${sum}`);
alert(`AVG is ${avg}`);

