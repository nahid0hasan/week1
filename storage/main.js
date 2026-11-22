let showUserName = document.getElementById("showusername");
let heading = document.getElementById("heading");
const showData = () => {
  let localData = localStorage.getItem("Username");
  if (localData) {
    heading.innerHTML = localData;
  }
};
showData();
showUserName.addEventListener("click", () => {
  let data = document.querySelector("#username").value;
  localStorage.setItem("Username", data);
  showData();
});

let store = document.getElementById("store");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
store.addEventListener("click", () => {
  let task = document.getElementById("task").value;
  localStorage.setItem("Task", task);
});
const displayText = () => {
  let localTask = localStorage.getItem("Task");
  if (localTask) {
    document.getElementById("displaytext").innerHTML = localTask;
  }
};
clear.addEventListener("click", () => {
  localStorage.removeItem("Task");
  displayText();
});

display.addEventListener("click", displayText);
