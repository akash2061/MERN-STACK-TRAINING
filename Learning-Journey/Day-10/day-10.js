let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let filterArray = a.filter(i => i % 20 == 0);
console.log(a);
console.log(filterArray);

let sum = a.reduce((acc, curr) => acc + curr);
console.log("\n1st sum: " + sum);
let sum1 = a.reduce((acc, curr) => acc + curr, -250);
console.log("2nd sum: " + sum1);

let findArray = a.find((i) => i % 3 == 0);
console.log("\nFind: " + findArray);
let findin = a.findIndex((i) => i % 3 == 0);
console.log("Index: " + findin);

//! Object Methods

let obj = {
    name: "Morningstar_2061",
    age: 20
}
console.log();
console.log(obj);

let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);