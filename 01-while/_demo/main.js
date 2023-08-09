// console.log('learn while loop');

// console.log("starting...")

// let i = 1;

// while(i <= 10) {
// // loop block
//     console.log(i)
//     i = i + 1; //  หรือเขียนว่า i++ , ++i
// }

// console.log("end...")


// let i = 1;

// while(i++ <= 10) { // update ค่า i หลังเช็คเงื่อนไข แล้วแสดงค่า i ใหม่
// // loop block
// // 1 < 10 => 2
// // 2 < 10 => 3
// // 3 < 10 => 4
// //...
//     console.log(i)
// }

// let i = ;

// while(++i <= 10) { // update ค่า i ก่อนเช็คเงื่อนไข แล้วแสดงค่า i ใหม่
// // loop block
// // 0 < 10 => 1
// // 1 < 10 => 2
// // 2 < 10 => 3
// //...
//     console.log(i)
// }

// let i = 1;
// while (i <= 20) {
//     if (i % 3 == 0) {
//         console.log(i);
//     } else  if (i % 5 == 0) {
//         console.log(`${i} : High Five`);
//     }

//     i++;
// }

let i = 1;
while (i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 && i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    i++;
}