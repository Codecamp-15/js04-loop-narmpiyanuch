let n = +prompt('number:');
//console.log(n);

//PATTERN RECOGNITION
// 1150 / 10 => 115 => count = 1
// 115 / 10   => 11.5 => count = 2
// 11.5 / 10 => 1.15 => count = 3
// 1.15 / 10 => 0.115 => count = 4
let count = 0;

if (n < 0) n = -n; // ถ้ามีค่าลบจะแปลงเป็นบวก

while (n >= 1) { // block การใส่ค่า negative
    console.log(n);
    count++;
    n = n / 10;
}
console.log(count);
