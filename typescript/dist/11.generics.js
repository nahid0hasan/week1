"use strict";
// Generics in typescript
function identity(arg) {
    return arg;
}
let output1 = identity("Subscribe my channel");
let output2 = identity(233);
// Generics in array
function getFirstElement(arg) {
    return arg[0];
}
let myNum = getFirstElement([1, 34, 5]);
let myString = getFirstElement(["nahid", "hamad"]);
let myVariable = {
    key: 123,
    value: "Information",
    person: {
        name: "Nahid",
        age: 20,
    },
};
// Generics classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.filter((i) => i !== item);
    }
    getItem() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello Nahid");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("Nahid"); // oK
logLength([1, 2, 5]); // oK
