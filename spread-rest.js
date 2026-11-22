// 1. Spread দিয়ে একটা অ্যারে বানাও যেখানে আগের একটা অ্যারের সব আইটেম থাকবে এবং সাথে নতুন দুটো আইটেম অ্যাড হবে।
const oldArray = ["React", "Next.js"];
const newArray = [...oldArray, "Nest.js", "Github"];
// 2. Rest দিয়ে এমন একটা ফাংশন বানাও যেটা যত খুশি নাম (strings) ইনপুট হিসেবে নিতে পারে এবং প্রিন্ট করবে: "Hello [Name]!" সবার জন্য।
function sayHallo(...names) {
  names.forEach((singleName) => {
    console.log(`Hello ${singleName}!`);
  });
}
sayHallo("Nahid", "Yassin", "Zisan");
