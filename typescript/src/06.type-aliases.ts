// Type alias
type Point = {
  x: number;
  y: number;
};
let point: Point = { x: 10, y: 20 };

// Type alias for premitives
type ID = string | number;
let userId: ID = "248";
let productId: ID = 787;

// Type alias vs Interface
// Interface can be extended, type aliases cannot
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
let dog: Dog = {
  name: "Tommy",
  breed: "Golden",
};

// Interfaces can be declared multiple times and will merge
interface Cat {
  name: string;
}
interface Cat {
  age: number;
}
let cat: Cat = {
  name: "Taplu",
  age: 2,
};

// Use interfaces for object shapes
// Type aliases for unions/intersections
interface WebUser {
  name: string;
  age: number;
}
type WebUserID = string | number;
