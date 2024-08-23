// Basic Function:
function sayHello() {
    return "Hello, World!";
}
console.log(sayHello());


// Function with Parameters:
function doubleNumber(number) {
    return number * 2;
}
console.log(doubleNumber(5));


// Simple Return Function:
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(3, 7));


// Arrow Function:
const doubleNumber2 = (number) => number * 2;
console.log(doubleNumber2(6));


// Arithmetic Operator:
function subtractTen(number) {
    return number - 10;
}
console.log(subtractTen(20));


// Comparison Operator:
function isGreaterThanFive(number) {
    return number > 5;
}
console.log(isGreaterThanFive(8));
console.log(isGreaterThanFive(3));


// Logical Operator:
function isBetweenOneAndTen(number) {
    return number >= 1 && number <= 10;
}
console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(15));


// If-Else Statement:
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEven(4));
console.log(isEven(7));


// Ternary Operator:
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log(checkAge(21));
console.log(checkAge(16));


// Switch Statement:
function getDayType(dayNumber) {
    switch (dayNumber) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day number";
    }
}
console.log(getDayType(3));
console.log(getDayType(7));
console.log(getDayType(10));
