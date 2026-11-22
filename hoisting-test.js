// Test 1: Classic Function (Eta cholbe)
normalFunction();

function normalFunction() {
  console.log("Normal function hoisted successfully!");
}

// Test 2: Arrow Function (Eta crash korbe naki dekho)
// arrowFunction();

const arrowFunction = () => {
  console.log("Arrow function test.");
};

console.log(secretToken); // Error dibe!
let secretToken = "xyz-999";
