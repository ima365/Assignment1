/*Write a simple function in JavaScript to loop through the first 200 numbers. If the number is
divisible by 3, store it in a Fizz array. If the number is divisible by 5, store it in Buzz array, If the
number is divisible by 3 and 5, store it in FizzBuzz array, otherwise store the number in Others.*/

let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Other  = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz.push(i);
     } else if (i % 3 === 0) {
        Fizz.push(i);
     } else if (i % 5 === 0) {
        Buzz.push(i);
     } else {
        Other.push(i);
    }
}

console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);


// write a simple function in JavaScript that will enable you to segment 100 Users equally using their User ID number.

let oddUser = [ ];
let evenUser = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 ) {
        evenUser.push("idNo-" + i);
    } else {
        oddUser.push("idNo-" + i);
    }
}

console.log(oddUser);
console.log(evenUser);
