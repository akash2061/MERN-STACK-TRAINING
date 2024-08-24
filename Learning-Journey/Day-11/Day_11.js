let a = [1, 2];
let b = [1, 2];
let c = a;

console.log(a === b);
console.log(a === c);
console.log(a);
console.log(c);
c.push(10);
console.log()
console.log(a === c);
console.log(a);
console.log(c);
console.log()

console.log()
console.log("Spread Operator.")
c = [...a];
c.push(20);
console.log(a === c);
console.log(a);
console.log(c);

let obj1 = {
    name: "NAME"
}
let obj2 = {
    age: 20
}
console.log()
let obj3 = {obj1,obj2};
console.log(obj3);
obj3 = {...obj1,...obj2};
console.log(obj3);