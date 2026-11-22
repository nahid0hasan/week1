let showUserName = document.getElementById("showusername");
let heading = document.getElementById("heading");
const showData = () => {
  let localData = sessionStorage.getItem("Username");
  if (localData) {
    heading.innerHTML = localData;
  }
};
showData();
showUserName.addEventListener("click", () => {
  let data = document.querySelector("#username").value;
  sessionStorage.setItem("Username", data);
  showData();
});

let store = document.getElementById("store");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
store.addEventListener("click", () => {
  let task = document.getElementById("task").value;
  sessionStorage.setItem("Task", task);
});
const displayText = () => {
  let localTask = sessionStorage.getItem("Task");
  if (localTask) {
    document.getElementById("displaytext").innerHTML = localTask;
  }
};
clear.addEventListener("click", () => {
  sessionStorage.removeItem("Task");
  displayText();
});

display.addEventListener("click", displayText);
