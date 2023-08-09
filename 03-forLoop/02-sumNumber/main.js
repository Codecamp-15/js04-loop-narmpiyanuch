//ผลรวมตัวเลขทุกตัว
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum = sum + i; 
} console.log(sum);

//ผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
let sumEven = 0;
let sumOdd = 0;
let sumAll = 0;

for (j = 1; j <= 100; j++){
    sumAll += j;
    if (j % 2 === 0){
        sumEven += j;
    }
    else {
        sumOdd += j;
    }
}
console.log(sumEven, sumOdd, sumAll - sumEven);

//หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (k = 1; k <= 100; k++){

    if (k % 2 === 0){
        // console.log(`${k}^2`);
        sumEvenSquare = sumEvenSquare + (k ** 2);
    }
    if (k % 3 === 0) {
        sumThirdSquare = sumThirdSquare + (k ** 2);
    }
}
console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumThirdSQ : ${sumThirdSquare}`);
console.log(`Result is : ${sumEvenSquare - sumThirdSquare}`);


