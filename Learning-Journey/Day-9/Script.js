// "use strict"

//! Loops, strict loop, console type, array methods

//! Loop -> while, Do whole, for

let c = 10;

while (c <= 10) {
    console.log("While Loop: ", c);
    c++;
}

do {
    console.log("Do-While Loop: ", c);
    c++;
} while (c == 10);

for (; c <= 12; c++) {
    console.log("For Loop: ", c);
}

let arr = ['A', 'B', 'C', 'D', 'E'];

console.log("\nFor-of:");
for (let i of arr) {
    console.log(i);
}
console.log("\nFor-in:");
for (let i in arr) {
    console.log(i);
}

// b = 10;
// console.log(b);
