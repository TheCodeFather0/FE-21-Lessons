// const getAge = () => {
//   let year = prompt("dogum ili");
//   return 2023 - year;
// };

// document.write(getAge());

// function checkHeight() {
//   let height = prompt("height with cm");
//   return height > 165 && true;
// }

// document.write(checkHeight());

// let a = "salam"; //string expression
// let b = 5; //number expression

//------------------------------------------------------------------------

// function func() {}          //function declaration
// const func = function(){}   //function expression
// const func = () => {}       //arrow function

// callBack

// const calc = function (a, b) {
//   return a + b;
// };
// document.write(calc(6, 9));

// const a = function (simvol) {
//   return simvol;
// };

// document.write(a(undefined));
// document.write(a(null));
// document.write(a(3));
// document.write(a(false));
// document.write(a("undefined"));

// const kartPin = 1111;

// const kart = "4169738800000000";
// const pin = +prompt("pini daxil edin");

// function duzYazdi() {
//   document.write("pullari cixar💸💸😎😍");
// }

// const sehvYazdi = function () {
//   document.write("sen qaldin kasib❌🚬");
// };

// const atm = function (correctPin, pin, correct, wrong) {
//   if (pin === correctPin) {
//     correct();
//   } else {
//     wrong();
//   }
// };

// atm(kartPin, pin, duzYazdi, sehvYazdi);

// const checkUser = function (question, answer, surprice, error) {
//   if (question == answer) return surprice();
//   return error();
// };

// const surprice = function () {
//   return "siz bizden Qarabag 🐎-i qazandiniz...";
// };

// const error = function () {
//   return "siz bizden 404 not found qazandiniz...❌🚬";
// };
// checkUser(prompt("menim nece yasim var?"), 37, surprice, error);

// const checkUser = (question, answer, surprice, error) => {
//   if (question == answer) return surprice();
//   return error();
// };

// const surprice = () => {
//   return "siz bizden Qarabag 🐎-i qazandiniz...";
// };

// const error = () => {
//   return "siz bizden 404 not found qazandiniz...❌🚬";
// };
// document.write(checkUser(prompt("menim nece yasim var?"), 37, surprice, error));

// const sayHello = (yes) => {
//   yes();
// };

// sayHello(() => {
//   alert("yes");
// });

// const checkAge = (age, qalib, meglub) => (age > 18 ? qalib() : meglub());
// const yes = () => "ehsen sene agsaqqal";
// const no = () => "meglubiyyet...";

// document.write(checkAge(3, yes, no));

const reversedText = (text) => {
  let reversedtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedtext += text[i];
  }
  return reversedtext;
};
// let metn =
document.write(reversedText(prompt("daxil et")));
