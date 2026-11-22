"use strict";
// Object type annotation
const user = { name: "Nahid Hasan", age: 20, id: 1 };
let laptop = {
    name: "Laptop",
    price: 200,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
