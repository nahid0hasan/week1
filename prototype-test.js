// 1. Constructor Function
function Person(name) {
  this.name = name;
}

// 2. Prototype-er sathe method add kora
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Nahid");
p1.sayHello(); // Output: Hello, my name is Nahid

// Eta same kaj-i kore, kintu dekhte onek clean!
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} (from Class)`);
  }
}

const p2 = new PersonClass("Yassin");
p2.sayHello(); // Output: Hello, my name is Yassin (from Class)

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  startEngine() {
    console.log(`${this.brand}, ${this.model} engine is starting... roar!`);
  }
}

const p3 = new Car("BMW", "V15");
p3.startEngine();
