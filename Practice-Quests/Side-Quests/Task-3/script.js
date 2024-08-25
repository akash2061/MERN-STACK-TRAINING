let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

let arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);

let arr3 = [1, null, 3, 4];
arr3.shift();
console.log(arr3);

let arr4 = [0, 3, 5];
arr4.unshift(null);
console.log(arr4);

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1, 99);
console.log(arr5);
arr5.splice(1,2, null);
console.log(arr5);

let arr6 = [1, 2, 3, 4, 5];
let slicedArr = arr6.slice(1, 3);
console.log(slicedArr);

let arr7 = [1, 2, 3, 4, 5];
let index = arr7.indexOf(3);
console.log(index);

let arr8 = [1, 2, 3, 4, 5];
let mappedArr = arr8.map(x => x * 2);
console.log(mappedArr);