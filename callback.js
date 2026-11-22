// function checkEvenNumber(num) {
//   return new Promise((resolve, reject) => {
//     console.log("Work is started");
//     setTimeout(() => {
//       if (num % 2 === 0) {
//         resolve(num);
//       } else {
//         reject("error");
//       }
//     }, 1000);
//   });
// }

// async function getEvenNumber() {
//   try {
//     console.log("data proccesss");
//     const data = await checkEvenNumber(4);
//     console.log(`${data} is jor shonkha`);
//   } catch (err) {
//     console.log("errro here", err);
//   }
// }
// getEvenNumber();

const checkMyAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(age);
      } else {
        reject("It's rejected");
      }
    }, 1000);
  });
};

const getMyAge = async () => {
  try {
    const data = await checkMyAge(19);
    console.log(`My age is ${data}, and i am adult`);
  } catch (err) {
    console.log(err);
  }
};

getMyAge();
