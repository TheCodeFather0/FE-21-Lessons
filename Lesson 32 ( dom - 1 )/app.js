// console.log(window);
// window.alert("salam");
// window.close = true;
// console.log(document.body.childNodes[1].nextSibling);

// let title = document.getElementById("title");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");

// title.innerText = "<h1>hi dom!</h1>";
// title.innerHTML = "<h1>hi dom!</h1>";
// const newName = prompt("adinizi daxile edin...");
// const newSurname = prompt("soy adinizi daxile edin...");
// name.innerText += " - " + newName;
// surname.innerText += " - " + newSurname;

// const carImage = document.querySelector("#myCarImage");
// let myNewCar = prompt("senin evez edilmez avtomobilin hansidir?");
// carImage.src = myNewCar;

// const newName = prompt("adinizi daxile edin...");
// const newSurname = prompt("soy adinizi daxile edin...");
// const newUserContainer = document.getElementsByClassName("newUser");
// const newUserContainer = document.querySelectorAll(".newUser");
// for (let i = 0; i < newUserContainer.length; i++) {
//   newUserContainer[i].innerHTML = "salam";
// }
// console.log(newUserContainer);
// newUserContainer.forEach((user) => {
//   user.innerHTML = "salam";
// });

// const students = document.querySelectorAll("li");
// let margin = prompt("margini daxil edin");
// let padding = prompt("padding daxil edin");

// students.forEach((student, index) => {
//   student.style.backgroundColor = "red";

//   if (student.innerText === "Taleh") {
//     let color = prompt("rengi daxil edin");
//     student.style.backgroundColor = color;
//     student.style.color = "lime";
//   }

//   student.style.margin = margin + "px";
//   student.style.padding = padding + "px";
// });

// const button = document.querySelector("#button");
// const yazi = document.querySelector("#title");

// button.onclick = () => {
//   if (yazi.classList.contains("hide")) {
//     yazi.classList.remove("hide");
//   } else {
//     yazi.classList.add("hide");
//   }
// };

// button.onclick = () => yazi.classList.toggle("hide");

const button = document.querySelector("#button");
const myPrompt = document.querySelector(".prompt");
const promptButton = document.querySelectorAll(".promptButton");
const promptInput = document.querySelector("#promptInput");
const pageSays = document.querySelector(".pageSays");
const prompTitle = document.querySelector(".title");
const ul = document.querySelector("ul");
let yaxcilar = [];

const openPrompt = (message, title) => {
  myPrompt.classList.add("show");
  pageSays.innerText = message;
  prompTitle.innerText = title;
};

const closePrompt = () => {
  myPrompt.classList.remove("show");
  pageSays.innerText = "";
  prompTitle.innerText = "";
};

const showData = () => {
  ul.innerHTML = "";
  yaxcilar.forEach((yaxci) => {
    ul.innerHTML += `<li>${yaxci}</li>`;
  });
}; 
// button.onclick = () => {
//   openPrompt("Salam olsun yaxçılara", "Tanıdığın yaxçıların adlarını yaz!");

//   promptInput.focus();
//   promptButton.forEach((b) => {
//     b.onclick = () => {
//       if (b.innerText === "OK") {
//         yaxcilar.push(promptInput.value);

//         promptInput.value = "";
//         closePrompt();
//         showData();
//       } else {
//         closePrompt();
//         message = null;
//       }
//     };
//   });
// };

//-----------------------
const buttonForLampa = document.querySelector("#buttonForLampa");
const lampa = document.querySelector("#lampa");
buttonForLampa.onclick = () => {
  if (lampa.src.includes("bulboff")) {
    lampa.src = lampa.src.replace("bulboff", "bulbon");
    buttonForLampa.innerText = "sondur";
    document.body.style.backgroundColor = "white";
  } else {
    lampa.src = lampa.src.replace("bulbon", "bulboff");
    buttonForLampa.innerText = "yandir";
    document.body.style.backgroundColor = "black";
  }
};
