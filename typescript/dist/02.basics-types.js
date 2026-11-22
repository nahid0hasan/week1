"use strict";
// Premitives
let personName = "Nahid Hasan";
let age = 20;
let isAdmin = true;
console.log("Premitives");
console.log(personName, age, isAdmin);
// Arrays
const number = [2, 45, 6, 7, 8];
const names = ["Nahid", "Hamad"];
const isReach = [true, false, true, false];
console.log("Arrays");
console.log(number, names, isReach);
// Objects
const iAm = { name: "nahid", age: 20 };
console.log(iAm);
// Tuples
let person = ["Nahid Hasan", 20];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 20;
randomValue = "nahid hasan";
randomValue = false;
// Unknown (safe than any )
let userInput;
userInput = "Nahid hasan";
userInput = 20;
// Void (for functions that don't return)
function subscribe(message) {
    console.log(message);
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
