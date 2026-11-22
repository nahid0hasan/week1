"use strict";
// Basic function with types
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
// Optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`;
}
console.log(greet("nahid", "hey"));
// Default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(2, 10));
// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(200, 300, 50));
// Arrow function
const devide = (a, b) => a / b;
console.log(devide(10, 2));
// Function types
let addValue;
