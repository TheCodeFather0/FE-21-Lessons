const button = document.getElementById("myButton");

// onclick
// button.onclick = (e) => {
//   e.target.className = "red";
//   e.target.style.color = "red";
// };

//double click
// button.ondblclick = () => {
//   alert("i am double click event");
// };

//context menu
// button.oncontextmenu = () => {
//   alert("sag duymeye click edildi");
// };

//mouseover
// button.onmouseover = (e) => (e.target.className = "dark");

// mouseout
// button.onmouseout = (e) => (e.target.className = "light");

//mousedown
button.onmousedown = (e) => {
  e.target.className = "orange";
};

//mouseup
// button.onmouseup = (e) => {
//   e.target.className = "green";
// };

// let str = "";
// window.onkeydown = (e) => str += e.key;
// button.onclick = () => console.log(str);

//submit
const form = document.getElementById("form");
const input = document.getElementById("input");
const focusButton = document.getElementById("focusButton");
const blurButton = document.getElementById("blurButton");

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
};

// focusButton.onclick = () => {
//   input.focus();
// };

// blurButton.onclick = () => {
//   input.blur();
// };

// input.onfocus = () => {
//   console.log("yazi yaza bilersiniz");
// };

// input.onblur = () => {
//   console.log("yazi yaza bilmezsiniz");
// };

button.addEventListener("click", () => {
  alert("klik edildi");
});

// form.addEventListener('submit',() => {

// })
