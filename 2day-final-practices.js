const orders = [
  { id: 1, customer: "Nahid", amount: 1200, status: "completed" },
  { id: 2, customer: "Abir", amount: 450, status: "completed" },
  { id: 3, customer: "Nahid", amount: 3000, status: "completed" },
  { id: 4, customer: "Sadia", amount: 800, status: "cancelled" },
  { id: 5, customer: "Yassin", amount: 5500, status: "completed" },
  { id: 6, customer: "Abir", amount: 1500, status: "completed" },
  { id: 7, customer: "Rafi", amount: 200, status: "completed" },
  { id: 8, customer: "Sadia", amount: 4200, status: "completed" },
  { id: 9, customer: "Nahid", amount: 900, status: "cancelled" },
  { id: 10, customer: "Yassin", amount: 1800, status: "completed" },
  { id: 11, customer: "Rafi", amount: 3200, status: "completed" },
  { id: 12, customer: "Tania", amount: 750, status: "completed" },
  { id: 13, customer: "Abir", amount: 2600, status: "cancelled" },
  { id: 14, customer: "Tania", amount: 4900, status: "completed" },
  { id: 15, customer: "Nahid", amount: 600, status: "completed" },
  { id: 16, customer: "Yassin", amount: 1100, status: "completed" },
  { id: 17, customer: "Sadia", amount: 2300, status: "completed" },
  { id: 18, customer: "Rafi", amount: 1400, status: "cancelled" },
  { id: 19, customer: "Tania", amount: 950, status: "completed" },
  { id: 20, customer: "Yassin", amount: 6200, status: "completed" },
];

// কাজ ১: Total Revenue (শুধু যেসব অর্ডার status === "completed", তাদের মোট amount বের করো)
const completedOrder = orders.filter((order) => order.status === "completed");
const totalRevenue = completedOrder.reduce(
  (total, price) => total + price.amount,
  0,
);
console.log("Completed Order", completedOrder);
console.log("Total Revenue", totalRevenue);
// কাজ ২: Revenue per customer (completed অর্ডারগুলোর ওপর ভিত্তি করে কার কত খরচ হয়েছে তার একটা অবজেক্ট বানাও, যেমন: { Nahid: 4800, Abir: 1950, ... })
console.log("TASK 2");
const RperCust = orders.map((order) => {
  if (order.status === "completed") {
    const myfavcust = { name: order.customer, price: order.amount };
    console.log(myfavcust);
  }
});
// কাজ ৩: 3 most expensive orders (অরিজিনাল orders অ্যারে মিউটেট না করে সবচেয়ে দামি ৩টা অর্ডার বের করো)
console.log("TASK 3");
const expensiveOrder = orders.filter((o) => o.amount > 3000);
console.log(expensiveOrder);
