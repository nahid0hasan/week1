// Generics in typescript
function identity<MyType>(arg: MyType): MyType {
  return arg;
}
let output1 = identity<string>("Subscribe my channel");
let output2 = identity<number>(233);

// Generics in array
function getFirstElement<T>(arg: T[]): T | undefined {
  return arg[0];
}
let myNum = getFirstElement([1, 34, 5]);
let myString = getFirstElement(["nahid", "hamad"]);

// Generics interface
interface KeyValuePair<K, V, N, A> {
  key: K;
  value: V;
  person: {
    name: N;
    age: A;
  };
}

let myVariable: KeyValuePair<number, string, string, number> = {
  key: 123,
  value: "Information",
  person: {
    name: "Nahid",
    age: 20,
  },
};

// Generics classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data.filter((i) => i !== item);
  }

  getItem(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello Nahid");

// Generics contrsaints
interface LengthWise {
  length: number;
}
function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
logLength("Nahid"); // oK
logLength([1, 2, 5]); // oK
