const number = [5, 10, 20, 30, 40];

for (let i = 0; i < number.length; i++) {
  const n = number[i];
  console.log(n + 5);
}

const friends = ["Shamim", "Jamal", "Abir"];
for (const friend of friends) {
  console.log(friend);
}

const prices = [100, 200, 400, 600];
prices.forEach((price) => {
  if (price > 300) {
    console.log(price);
  }
});
