// // ফেক এপিআই কলগুলো বানিয়ে নিলাম
// const fetchProfile = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve("User Profile Data"), 1000),
//   );
// const fetchCart = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Cart Items Data"), 1500));
// const fetchNotifications = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject("Server Error in Notifications!"), 800),
//   );

// // ১. Promise.all এর খেলা (সব লাগবেই, একটা ফেইল তো সব ফেইল)
// async function loadDashboardWithAll() {
//   try {
//     console.log("Loading dashboard (Promise.all)...");
//     const [profile, cart, notifications] = await Promise.all([
//       fetchProfile(),
//       fetchCart(),
//       fetchNotifications(), // এটা ফেইল করলে পুরো try ব্লক ক্র্যাশ করে catch এ চলে যাবে
//     ]);
//     console.log("Success:", profile, cart, notifications);
//   } catch (err) {
//     console.log("Promise.all Failed because:", err);
//   }
// }

// // ২. Promise.allSettled এর খেলা (সবগুলোর খবর নেবো, কোনটা ফেইল করল দেখব)
// async function loadDashboardSafely() {
//   console.log("Loading dashboard safely (Promise.allSettled)...");
//   const results = await Promise.allSettled([
//     fetchProfile(),
//     fetchCart(),
//     fetchNotifications(),
//   ]);
//   // এখানে প্রতিটার রেজাল্ট আলাদা অবজেক্ট আকারে পাওয়া যাবে
//   results.forEach((res, index) => {
//     if (res.status === "fulfilled") {
//       console.log(`Task ${index + 1} Success:`, res.value);
//     } else {
//       console.log(`Task ${index + 1} Failed:`, res.reason);
//     }
//   });
// }

// // ফাংশন কল করে টেস্ট করতে পারিস
// loadDashboardSafely();

const slowTask = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Slow task finished"), 2000),
  );
const fastTask = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Fast task finished"), 1000),
  );

async function getTask() {
  try {
    const firstTask = await Promise.race([slowTask(), fastTask()]);
    console.log(firstTask);
  } catch (err) {
    console.log(err.message);
  }
}

getTask();
