// Q-1
console.log();
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

// Q-2
console.log();
let arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);

// Q-3
console.log();
let arr3 = [1, null, 3, 4];
arr3.shift();
console.log(arr3);

// Q-4
console.log();
let arr4 = [0, 3, 5];
arr4.unshift(null);
console.log(arr4);

// Q-5
console.log();
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1, 99);
console.log(arr5);
arr5.splice(1,2, null);
console.log(arr5);

// Q-6
console.log();
let arr6 = [1, 2, 3, 4, 5];
let slicedArr = arr6.slice(1, 3);
console.log(slicedArr);

// Q-7
console.log();
let arr7 = [1, 2, 3, 4, 5];
let index = arr7.indexOf(3);
console.log(index);

// Q-8
console.log();
let arr8 = [1, 2, 3, 4, 5];
let mappedArr = arr8.map(x => x * 2);
console.log(mappedArr);

// Q-9
console.log();
let arr9 = [1, 2, 3, 4, 5];
let filteredArr = arr9.filter(x => x > 3);
console.log(filteredArr);

// Q-10
console.log();
let arr10 = [1, 2, 3, 4, 5];
let sum = arr10.reduce((acc, curr) => acc + curr, 0);
console.log(sum);