const redBtn = document.querySelector("#red");
// const greenBtn = document.querySelector("#green");
// const blueBtn = document.querySelector("#blue");
// const yellowBtn = document.querySelector("#yellow");

// const buttons = document.querySelectorAll(".button");
// const changeBgColor = (color) => (document.body.style.backgroundColor = color);
// buttons.forEach((b) => (b.onclick = () => changeBgColor(b.dataset.color)));

// console.log(redBtn.hasAttribute("class"));
// console.log(redBtn.getAttribute("title"));
// redBtn.setAttribute("class", "redButton");

// // redBtn.onclick = () => {
// //   redBtn.removeAttribute("class");
// // };

// redBtn.onclick = () => {
//   //   if (redBtn.classList.contains("red")) {
//   //     redBtn.classList.remove("red");
//   //     document.body.style.background = "white";
//   //   } else {
//   //     redBtn.classList.add("red");
//   //     document.body.style.background = "red";
//   //   }
//   //   redBtn.classList.toggle("red");
// };

//   todosContainer.appendChild(li);
//   todosContainer.append(li);
//   todosContainer.prepend(li);
//   todosContainer.after(li);

const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");
const todosContainer = document.getElementById("todosContainer");
const modal = document.querySelector(".modal");
const editInput = document.querySelector("#editInput");
const updateTodo = document.querySelector("#updateTodo");

addTodoButton.onclick = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const doneButton = document.createElement("button");

  editButton.innerText = "🖊";
  deleteButton.innerText = "❌";
  doneButton.innerText = "✔";

  span.innerText = todoInput.value;
  li.append(span, editButton, deleteButton, doneButton);
  li.classList.add("todo");
  todosContainer.appendChild(li);

  deleteButton.onclick = () => {
    const isAgree = confirm("silmek istediyine eminsenmi?");
    if (isAgree) {
      todosContainer.removeChild(deleteButton.parentElement);
      alert("todo silindi");
    }
  };

  editButton.onclick = () => {
    const value = editButton.previousElementSibling.innerText;

    modal.style.display = "flex";
    editInput.value = value;
    editInput.focus();
    updateTodo.onclick = () => {
      span.innerText = editInput.value;
      editInput.value = "";
      modal.style.display = "none";
      alert("todo update edildi");
    };
  };

  doneButton.onclick = () => {
    span.style.color = "white";
    span.style.textDecoration = "line-through red";
  };

  todoInput.focus();
  todoInput.value = "";
};
