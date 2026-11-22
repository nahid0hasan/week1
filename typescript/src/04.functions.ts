// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 5));

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}`;
}
console.log(greet("nahid", "hey"));

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}
console.log(multiply(2, 10));

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(200, 300, 50));

// Arrow function
const devide = (a: number, b: number): number => a / b;
console.log(devide(10, 2));

// Function types
let addValue: (x: number, y: number) => number;
