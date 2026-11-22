// const mydiv = document.getElementById("container");
const myDiv = document.querySelector("#container");
const newButton = document.createElement("button");
newButton.textContent = "Click me";
newButton.classList.add("btn-primary");
newButton.addEventListener("click", function () {
  newButton.style.backgroundColor = "red";
});
myDiv.appendChild(newButton);

const todosItems = ["Web Task"];
const todotext = document.getElementById("todotext");
const addtodo = document.getElementById("addtodo");
const todos = document.getElementById("todos");
function reRender() {
  todos.innerHTML = "";
  todosItems.forEach((titem) => {
    const tli = document.createElement("li");
    tli.textContent = titem;
    tli.style.color = "red";
    todos.appendChild(tli);
  });
}
reRender();
addtodo.addEventListener("click", function () {
  const newtodoitem = todotext.value;
  todosItems.push(newtodoitem);
  reRender();
});

const myForm = document.getElementById("myform");
const myText = document.getElementById("mytext");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(myText.value);
});

// fetch learning'
const newUser = { name: "nahid", job: "ceo" };
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
      return;
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const userLists = document.getElementById("userlists");
const userLi = document.createElement("li");
