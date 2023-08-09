// จำนวนเฉพาะ (prime number) คือ มีแค่ตัวมันเองกับเลข 1 ที่หารลงตัว
// Program : เริ่มสร้างโค้ดจาก จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือป่าว ?

// let n = 5;
// let isPrime = true; // การใช้ flag

for(let n = 2; n <= 100; n++) {
    // For only 1 Number
    let isPrime = true; // การใช้ flag
    for (let divider = 2; divider < n; divider++){
        //divider 2,3,4,....,n-1
        if (n % divider == 0) {
            isPrime = false;
            break;
        }
        //ถ้ามีเลขระหว่างทาง หารลงตัว แสดงว่าไม่ใช่ จำนวนเฉพาะ
        // n = 2  5/2 = 2.5 => isPrime = true
        // n = 3  5/3 = 1.6 => isPrime = true
        // n = 4  4/5 = 1.25 => isPrime = true
        // n = 5 จบการทำงาน
    }
    if (isPrime) console.log(n);
    // if(isPrime) console.log(`number ${n} is prime number`);
    // else console.log(`number ${n} not prime number`);
}


