// 1. Object Destructuring (অবজেক্ট থেকে ডেটা টানা)
const product = {
  name: "Wireless Mouse",
  price: 2500,
  category: "Electronics",
  stock: 45,
};

// --- Destructuring Way ---
// অবজেক্টের প্রপার্টির নাম হুবহু মিলে যেতে হবে!
const { name, price } = product;

console.log(name); // Output: Wireless Mouse
console.log(price); // Output: 2500

// Variable Rename করা: তুমি চাইলে ভেরিয়েবলের নাম বদলে নিতে পারো:
const { name: productName, price: productPrice } = product;
console.log(productName, "and the price is", productPrice);

// Default Value দেওয়া: কোনো প্রপার্টি যদি অবজেক্টে না থাকে, তবে ডিফল্ট ভ্যালু সেট করে দেওয়া যায়:
const { model = "bmw", discount = 30 } = product;
console.log(model, "the discount is", discount);

// 2. Array Destructuring (অ্যারে থেকে ডেটা টানা)
const colors = ["red", "green", "blue", "yellow"];

// --- Destructuring Way ---
const [firstColor, , thirdColor] = colors;
const [Color1, ...more] = colors;

console.log(firstColor); // Output: red
console.log(thirdColor); // Output: green
console.log(Color1, more);

// 💻 Tomar Kaj (VS Code Action)
const user = {
  id: 101,
  profile: {
    firstName: "Asratul",
    lastName: "Nahid",
    age: 24,
  },
  hobbies: ["Coding", "Writing", "Gaming"],
};

// 1. Object destructuring দিয়ে profile থেকে firstName আর age বের করো।
// 2. Array destructuring দিয়ে hobbies থেকে প্রথম আর দ্বিতীয় শখটা (hobby) আলাদা করো।
const { firstName, age: Myage } = user.profile;
console.log("name is", firstName, "the age is", Myage);
// advance for object
const {
  profile: { firstName: fName, age },
} = user;
console.log("Advance of object", fName, age);
const [firstHobby, secondHobby] = user.hobbies;
console.log(firstHobby, secondHobby);
// advance for array
const {
  hobbies: [fHobby, sHobby],
} = user;
console.log("Advance of array", fHobby, sHobby);
