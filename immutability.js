// টাস্ক ১: অবজেক্ট ইমিউটেবিলিটি
const product = { id: 1, name: "Laptop", price: 50000 };
const updatedProduct = { ...product, price: 55000 };
console.log(updatedProduct);
// স্প্রেড অপারেটর (...) ব্যবহার করে price পরিবর্তন করে 55000 করো এবং নতুন একটা অবজেক্ট বানাও (original product যেন ঠিক থাকে)।

// টাস্ক ২: অ্যারেতে আইটেম যোগ করা
const cart = ["Mouse", "Keyboard"];
const myCart = [...cart, "Monitor"];
console.log(myCart);
// স্প্রেড (...) ব্যবহার করে "Monitor" আইটেমটা কার্টে যোগ করে একটা নতুন অ্যারে বানাও।

// টাস্ক ৩: অ্যারে থেকে ডিলিট করা
const todos = [
  { id: 1, text: "Learn JS", completed: true },
  { id: 2, text: "Learn React", completed: false },
];
const newTodos = todos.filter((todo) => todo.id !== 1);
console.log(newTodos);
// filter() ব্যবহার করে id: 1 ওয়ালা টোডোটা বাদ দিয়ে একটা নতুন অ্যারে বানাও।
