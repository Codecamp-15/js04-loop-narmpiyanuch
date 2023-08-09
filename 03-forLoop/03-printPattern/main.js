// print ได้แถวละครั้ง , print ได้ทีละ *
// string concat 

// for (let i = 1; i <= 5; i++) {
//     // console.log('*');
//     let str = '';
//     for (let j = 1; j <= 5; j++) {
//             str = str + '*';
//     }
//     console.log(str);
// }
// result จะได้ ***** ทั้งหมด 5 แถว

// for (let i = 1; i <= 4; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }

let str = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        // j มีโอกาสเป็น 1,2,3,4
        // i มีโอกาสเป็น 1,2,3,4
        if (j <= i) str += '*';
    }
    str += '\n';
}
console.log(str);

// let str = '';
// for (let i = 1; i <=4 ; i++) {
//     str += '*';
//     console.log(str);
// } 
