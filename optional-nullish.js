const settings = {
  theme: "", // ফাঁকা স্ট্রিং
  notifications: null,
};

// 1. theme এর ক্ষেত্রে যদি ?? ব্যবহার করো, তবে আউটপুট কী আসে দেখো ("dark" ডিফল্ট দিয়ে)।
// 2. settings অবজেক্টের ভেতরে settings?.deepSettings?.audio দিয়ে Optional chaining টেস্ট করো যাতে ক্র্যাশ না করে।
const themeColor = settings.theme ?? "Dark";
const audioS = settings?.deepSettings?.audio;
console.log("Theme color is", themeColor, "Deep Settings is", audioS);
