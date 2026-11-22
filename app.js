function setupDashboard() {
  let isAdmin = true;

  if (isAdmin) {
    const userRole = "Super Admin"; // Bug: eta baire leak korse
    console.log("Inside block: " + userRole);
  }

  // Amra chai ei line-e ashar por userRole r pawa jabe na (error debe),
  // kintu var thakar karon bar bar print hocche!
  //   console.log("Outside block: " + userRole);
}

setupDashboard();

// Function-ta upore call korlam, kono problem nai!
sayHello(); // Output: "Hello Nahid!"

function sayHello() {
  console.log("Hello Nahid!");
}

// console.log(apiKey); // Error! Karon eta TDZ-er vitor ache.
const apiKey = "abc-123";
console.log(apiKey); // Ekhane ashar por r error dibe na.

// runThisEarly(); // CRASH! ReferenceError: Cannot access 'runThisEarly' before initialization

const runThisEarly = () => {
  console.log("I am an arrow function!");
};

runThisEarly(); // Ekhane thik moto kaj korbe.
