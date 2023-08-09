// console.log("learn countion loop");

// console.log("starting...");
// // () = parenthesis = วงเล็บ
// // {} = bracket = ปีกกา
// // [] = square bracket = ก้ามปู

// for (let i = 1; i <= 20; i++ ){
//     if (i % 2 === 0) console.log(i);
//     else continue;
//     console.log('even');
// // i = 2 => log (2), log(even)
// // i = 3 => จะมาที่ continue ก็คือจะกลับไปที่ step (i++)
// }

// console.log("end....")

// // EX 4
// let str = ""

// for(let i = 1; i <= 10; i++) {

//     // Guard
//     if(i % 3 === 0) continue;
//     str = str + i; // หรือเขียน str +=i;
//     // "" + 1 => "1"
//     // "1" + 2 => "12"
// }
// console.log(str)

// EX5 : remove vowel (a,e,i,o,u)

// let src = "codecamp"
// let res = "" //ต้องให้ result เอามาจาก src แต่ไม่เอา vowel

// // src.length ==> 8 ซึ่งสามารถเขียนได้ i < src.lenght
// // src[0] ==> c (first charactor)
// // src[1] ==> o

// for (let i = 0; i < 8; i++){
//     // console.log(i, src[0]); 
//     // จะแสดงค่า i และตัวหนังสือตัวแรกของคำว่า codecamp ก็คือ c เช่น 0 'c'
//     // '' + src[0] == '' + 'c' => 'c'
//     //let c = src[i];
//     if (src[i] == 'a' || src[i] == 'e' || src[i] == 'i' || src[i] =='o' || src[i] == 'u') continue;
//     res = res + src[i]
// }
// console.log(res);

// for (let i = 0; i < 8; i++){
//     // let isVowel = c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
//     if (isVowel) continue;
//     else res = res + src[i]
// }


// ADVANCE : Nested Loop;
//Multiplication Table

for (let i = 2; i <= 12; i++) {
    // console.log(i);
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
    for(let j = 1; j <=12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');
}

console.log("end....")
