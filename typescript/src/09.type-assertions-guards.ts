// Type assertion
let someValue: unknown = "Nahid Hasan";
let strLength: number = (someValue as string).length;
// Or
let strLength2: number = (<string>someValue).length;

// Type guards
function proccessValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
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
function makeSound(animal: MyDog | MyCat) {
  if (animal instanceof MyDog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
