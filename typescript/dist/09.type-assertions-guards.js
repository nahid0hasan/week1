"use strict";
// Type assertion
let someValue = "Nahid Hasan";
let strLength = someValue.length;
// Or
let strLength2 = someValue.length;
// Type guards
function proccessValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// instanceof type guard
class MyDog {
    bark() {
        console.log("Woof");
    }
}
class MyCat {
    meow() {
        console.log("Meow");
    }
}
function makeSound(animal) {
    if (animal instanceof MyDog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
