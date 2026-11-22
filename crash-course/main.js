// let a = 123456789012345678901234567890n;
// console.log(typeof a);
// console.log(a);

// let b = 20;
// let c = "Hello World";
// let d = true;
// console.log(typeof b);
// console.log(b);
// console.log(typeof c);
// console.log(c);
// console.log(typeof d);
// console.log(d);

// let a = 10;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// b -= 10;
// console.log(b);
// a += 10;
// console.log(a);

// console.log(++a);
// console.log(a);

// let a = 10;
// let b = 20;
// let c = 10n;
// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);

// console.log(a === c);
// console.log(a !== c);

// let a = 10;
// let b = 20;

// console.log(a < b && a > 5);
// console.log(a > b && a > 5);
// console.log(a > b || a > 5);

// let a = undefined;
// let b = Infinity;
// let c = null;
// let d = NaN;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// // check type of it's same
// console.log(5 / 0);
// console.log(5 / -0);
// console.log(Math.sqrt(-1));

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter a number:", (input) => {
//   //   console.log(input);
//   const number = Number(input);
//   if (Number.isNaN(number)) {
//     console.log("Please enter a valid number.");
//   } else if (number < 10) {
//     console.log("Your number is less then 10.");
//   } else if (number < 30) {
//     console.log("Your number is less then 30.");
//   } else {
//     console.log("Your number is greater then or equal to 30");
//   }

//   rl.close();
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(
//   "Enter a choice: (1) Print Hello World (2) Print PI (3) Exit the script:",
//   (input) => {
//     //   console.log(input);
//     const number = Number(input);

//     switch (number) {
//       case 1:
//         console.log("Hello world");
//         break;
//       case 2:
//         console.log(3.14159);
//         break;
//       case 3:
//         process.exit();
//         break;
//       default:
//         console.log("Invalid choice!");
//         break;
//     }

//     rl.close();
//   },
// );

// let counter = 20;

// // while (counter < 10) {
// //   //   console.log(counter++);
// //   console.log(++counter);
// // }

// do {
//   console.log(counter++);
// } while (counter < 10);

// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }
// let arr = ["20", "34", "13", "70"];
// for (index in arr) {
//   console.log(index);
// }
// for (element of arr) {
//   console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }
// console.log("Hello world");

// loop1: for (let i = 0; i < 10; i++) {
//   loop2: for (let j = 0; j < 10; j++) {
//     if (i == 5 && j == 2) {
//       break loop1;
//     }
//     console.log(`${i} and ${j}`);
//   }
// }
// console.log("Hello world");

// function printHello(name) {
//   console.log(`Hello ${name}`);
// }

// printHello("Nahid");
// printHello("Abir");
// printHello("Shamim");

// function add(num1, num2 = 20) {
//   return num1 + num2;
// }
// const result = add(10);
// console.log(result);

// let value = (function () {
//   let a = 10;
//   let b = 40;
//   return a + b;
// })();

// console.log(value);

// function someFunction() {
//   for (arg of arguments) {
//     console.log(arg);
//   }
// }

// someFunction(1, 2, 3);

// function mySum(a, b, ...numbers) {
//   let x = a + b;
//   for (let number of numbers) {
//     x += number;
//   }
//   return x;
// }
// console.log(mySum(1, 2, 3));

// const lambdaExpression = (a, b, c) => a + b + c;
// console.log(lambdaExpression(10, 20, 30));
// const printMyName = (name) => {
//   console.log(name);
// };
// printMyName("nahid");

// function myFunction(otherFunction) {
//   console.log("Running the passed function");
//   otherFunction();
// }
// function hello() {
//   console.log("Hello world");
// }
// myFunction(hello);

arr = [10, true, "hello", 12.345, 567n];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
arr[2] = "Something changed";
console.log(arr);

let myMap = new Map([
  ["name", "Nahid"],
  ["age", 18],
  [10, "favorite"],
]);
console.log(myMap);
console.log("name is", myMap.get("name"));
console.log("age is", myMap.get("age"));
console.log("10 is", myMap.get(10));
myMap.set("job", "ceo");
console.log(myMap);

let mySet = new Set([1, 2, 3, 4, 1, 2]);
console.log(mySet);

let myPerson = {
  name: "hamad saleh",
  age: 24,
  job: "chairs",
  makeOlder(years) {
    this.age += years;
  },
};

console.log(myPerson);
console.log(typeof myPerson);
myPerson.makeOlder(10);
console.log(myPerson);

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  makeOlder(years) {
    this.age += years;
  }
}
let mynewPerson = new Person("Nahid", 18, "CEO");
console.log(mynewPerson);
mynewPerson.makeOlder(10);
console.log(mynewPerson);
