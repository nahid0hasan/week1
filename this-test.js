const user1 = {
  name: "Nahid",
  printName: function (city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
  },
};

const user2 = {
  name: "Yassin",
};

// user1-er function ta user2-er jonno use korbo 'call' diye!
user1.printName.call(user2, "Dhaka", "Bangladesh");
// Output ki ashbe bhabo? Run kore dekho!

// .apply() er khetre: arguments gulu array-te thakbe
user1.printName.apply(user2, ["Dhaka", "Bangladesh"]);
