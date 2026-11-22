const products = [
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "Monitor", price: 12000, inStock: false },
  { name: "Headphone", price: 2000, inStock: true },
];

// 1. map() দিয়ে সবগুলো প্রোডাক্টের শুধু নাম (name) নিয়ে একটা নতুন অ্যারে বানাও।
// 2. filter() দিয়ে শুধু যেসব প্রোডাক্ট inStock: true আছে, সেগুলো বের করো।
// 3. find() দিয়ে "Keyboard" প্রোডাক্টের অবজেক্টটা খুঁজে বের করো।
// 4. reduce() দিয়ে সবগুলো প্রোডাক্টের মোট দাম (total price) বের করো।

const productNames = products.map((product) => product.name);
console.log("productNames", productNames);

const stockProducts = products.filter((p) => {
  if (p.inStock === true) {
    console.log(p);
  } else {
    console.log("not found");
  }
});
console.log("stockProducts", stockProducts);

const keyboardProduct = products.find((p) => p.name === "Keyboard");
console.log("keyboardProduct", keyboardProduct);

const totalPrice = products.map((p) => {
  p.price.reduce((total, price) => total + price, 0);
});
console.log("totalPrice", totalPrice);
