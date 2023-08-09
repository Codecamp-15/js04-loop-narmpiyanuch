//หลักการแบ่ง require

// Program-1 : Input User-1

// let ansNumber = prompt('Enter your : magic number');

//prompt สามารถรับได้ทั้ง null , string : "", "....","qwer","12"
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === '';
// let isNan = isNaN(ansNumber);
// let isValid = ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >=1 && Number(ansNumber) <=99;
// if (isValid) {
//     alert('Invalid Input'); 
// } else if (outOfRange) {
//     alert ('Invalid range');
// } else if (isInRange) {
//     alert('Try to guess number');
// }

//Program-1 V2 : รับ input ได้เรื่อยๆ จนกว่าจะพิมพ์ถูก แต่ให้กด ESC เพื่อจบโปรแกรมได้
// ตัวแปรประกาศไว้นอก do

let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;
do {
    ansNumber = prompt('Enter your : magic number') || ''; 
    // เขียนเพิ่มเพื่อให้ prompt ส่งค่าที่เป็น string มาให้ 
    //เพราะว่าคำสั่ง || ถ้าเป็น true จะส่งค่าแรก
    // ถ้า false จะส่งค่าสุดท้าย
    
    // พวกนี้ต้องไว้หลัง prompt เพราะว่าต้องรับค่าก่อน
    // if (ansNumber !== null) {
    //     isEmpty = ansNumber.trim() === ''; 
    //     isNan = isNaN(ansNumber);
    // }
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if (isEmpty || isNan) {
        alert('Invalid number Try 1-99');
    } else if (outOfRange) {
        alert('Invalid number Try 1-99');
    }
} while (isEmpty || isNan);
// while (ansNumber == null || isEmpty || isNan);

//Program-2 : Guess ทายตัวเลข
// 1.ทายซ้ำ
// 2. Hint OutOfRange
// 3. Hint Invalid Range
// Too Hight number / Too Low number
// alert correct
// ทายได้ไม่เกิน 5 ครั้ง

let guessNumber = '';

do {
    guessNumber = prompt('Enter your : guess number') || '';
    
    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if (isEmpty || isNan) {
        alert('Invalid number Try 1-99');
    } else if (outOfRange) {
        alert('Invalid number Try 1-99');
    }else if (+guessNumber > +ansNumber) {
        alert('Hight number');
    } else if (+guessNumber < +ansNumber) {
        alert('Low number');
    } else if (+guessNumber === +ansNumber) {
        alert('Correct');
    }
} while(+guessNumber != +ansNumber);