// Interface
interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number;
}
// Object type annotation
const user: User = { name: "Nahid Hasan", age: 20, id: 1 };
// user.id = 2;

// Interface with methods
interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}
let laptop: Product = {
  name: "Laptop",
  price: 200,
  getDiscount(percentage: number): number {
    return this.price * (percentage / 100);
  },
};
