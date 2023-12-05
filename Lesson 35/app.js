// const btn = document.querySelector("#btn");
// btn.onclick = () => {
//   setTimeout(() => {
//     document.body.style.background = "purple";
//   }, 3000);
// };

// setTimeout(() => {
//   loading.classList.add("hide");
// }, 3000);

// const loading = document.querySelector(".loading");
// const loadingBaglanmasinBtn = document.querySelector("#loadingBaglanmasinBtn");

// const hideLoader = () => loading.classList.add("hide");
// const showLoader = setTimeout(hideLoader, 2000);

// loadingBaglanmasinBtn.addEventListener("click", () => {
//   clearTimeout(showLoader);
// });

// const color = prompt("qirmizi,ag,qara yoxsa goy?");
// if (color === "ag") {
//   console.log("ehsen sene😇");
// } else {
//   console.log("bomba 3 saniye sonra partlayacaq");
//   setTimeout(() => {
//     console.log("💣🚬💣");
//   }, 3000);
// }

let count = 0;
h1.innerText = count;
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");

const counter = () => {
  count++;
  h1.innerText = count;
};
let countIncrement = setInterval(counter, 1000);
reset.addEventListener("click", () => {
  count = 0;
  h1.innerText = count;
});

play.addEventListener("click", () => {
  countIncrement = setInterval(counter, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(countIncrement);
});

stop.addEventListener("click", () => {
  clearInterval(countIncrement);
  count = 0;
  h1.innerText = count;
});

const modeBtn = document.querySelector(".modeBtn");

const changeMode = () => {
  let mode = localStorage.getItem("mode");

  if (mode === "dark") {
    document.body.className = "dark";
    modeBtn.innerText = "🌞";
  } else {
    document.body.className = "light";
    modeBtn.innerText = "🌛";
  }
};
changeMode();

modeBtn.addEventListener("click", () => {
  if (localStorage.getItem("mode") === "light") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }

  changeMode();
});


