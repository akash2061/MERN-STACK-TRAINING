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

console.log();
// console.error();
// console.worn();
console.assert(10 < 5, " 10 < 5");

//! object literals

const person = {
    Name: "VS Code",
    Age: "**",
    address: {
        path: "C:\\ program file\\ nodejs",
        more: "JavaScript is Fun...!",
    },
    arr: ["Hello", "Bye", "Hi"],
};

console.dir(person);
console.log(person.Age, person.address);
console.log(person.arr[1]);
console.log(person.address.more);

let data = [
    {
        x: "int", y: "Integer"
    },
    {
        x: "char", y: "Character"
    },
    {
        x: "double", y: "Double"
    }
];

console.table(data);
console.group("G1:");
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.groupEnd();
console.log("\nGroup end.");