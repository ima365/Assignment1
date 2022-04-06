let oddUser = [ ];
let evenUser = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 ) {
        evenUser.push(i);
    } else {
        oddUser.push("idNo-" + i);
    }
}

console.log(oddUser);
console.log(evenUser);
/*console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);*/
