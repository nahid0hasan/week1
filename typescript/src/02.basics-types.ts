// Premitives
let personName: string = "Nahid Hasan";
let age: number = 20;
let isAdmin: boolean = true;
console.log("Premitives");
console.log(personName, age, isAdmin);

// Arrays
const number: number[] = [2, 45, 6, 7, 8];
const names: string[] = ["Nahid", "Hamad"];
const isReach: boolean[] = [true, false, true, false];
console.log("Arrays");
console.log(number, names, isReach);

// Objects
const iAm: { name: string; age: number } = { name: "nahid", age: 20 };
console.log(iAm);

// Tuples
let person: [string, number] = ["Nahid Hasan", 20];

// Enum
enum Color {
  Red,
  Blue,
  Yellow,
}
let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 20;
randomValue = "nahid hasan";
randomValue = false;

// Unknown (safe than any )
let userInput: unknown;
userInput = "Nahid hasan";
userInput = 20;

// Void (for functions that don't return)
function subscribe(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
