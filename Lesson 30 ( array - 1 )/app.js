let students = [
  "Renad",
  "Yasar",
  "Huseyn",
  "Taleh",
  "Samir",
  "Lacinli",
  "Vusal",
  "Elsen",
  "Nurlan",
];

// console.log(students.length); //massiv

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (let value of students) {
//   document.write(`<p>${students.indexOf(value) + 1}. ${value}</p> <br />`);
// }

// students.unshift("Elchin");
// students.shift();
// students.pop();
// students.push("Elchin");
// console.log(students);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, [10, 11, [12, 13, [14, 15]]]],
];

// console.log(matrix[2][3][2][2][1]); //15
/*
  rest parameters -> ...
  spread operator -> ...
*/

// function a(first, ...numbers) {
//   console.log(first);
//   console.log(numbers);
// }

// a(1, 2, 3, 4, 5);

// console.log(...students);

// console.log("old students: ", students);
// console.log(
//   "----------------------------------------------------------------------"
// );
// students.reverse();
// console.log(students.includes("Renad"));

// console.log(students.concat("salam", [1, 2, 3, 4], "sagol", 34, ["salam "]));
// console.log(students.slice(0, 3));
// console.log(students.splice(0, 3, "Elchin"));

// students.splice(3, 0, "Elchin");

// students.length = 20;
// students[20] = "Elchin";
// console.log(students.length);
// console.log("new students: ", students);

// let str = "salam dunya esq olsun";
// let arr = str.split(" ").join("-");
// console.log(arr);
// let arr = [];

// for (let i of str) {
//   arr.push(i)
// }
// console.log(arr);
// let name = prompt("adi yaz");
// if (name) {
//   alert(name);
// }
// name ? alert(name) : null;
// name && alert(name);
// let numbers = [
//   1,
//   2,
//   [3434, 2323, 234342],
//   232,
//   [2323, 232432, [2323232, 4543, [232]], [3434, 244543, 54]],
// ];
// console.log(numbers.flat());

// let soz = "sAlAm <br />";
// let yeniSoz = "";
// document.write(soz);
// const swapCase = () => {
//   for (let value of soz) {
//     if (value === value.toUpperCase()) {
//       yeniSoz += value.toLowerCase();
//     } else {
//       yeniSoz += value.toUpperCase();
//     }
//   }

//   return yeniSoz;
// };

// document.write(swapCase());

//task 1
// let n = +prompt("number");
// while (n < 100) {
//   n += 7;
// }
// document.write(n + "<br />");

// let n = +prompt("number");
// const text = "«I know how to use cycles» <br />";
// const tekrarYazdir = () => text.repeat(n);
// document.write(tekrarYazdir());

// let n = 99;
// let sum = 0;
// const tekEdedlerinCemi = () => {
//   for (let i = 10; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// document.write(tekEdedlerinCemi());

// let ad = prompt("adi ve soy adi daxil edin").split(" ");
// document.write(`${ad[1]} ${ad[0]}`);

// let aylar = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "Avqust",
//   "Sentyabr",
//   "Oktyabr",
//   "Noyabr",
//   "Dekabr",
// ];
// let date = prompt("YYYY.MM.DD");
// let dateArr = date.split(".");
// result = `${dateArr[2]}.${aylar[+dateArr[1] - 1]}.${dateArr[0]}`;

// let teklik = [
//   "sifir",
//   "bir",
//   "iki",
//   "üç",
//   "dord",
//   "bes",
//   "alti",
//   "yeddi",
//   "sekkiz",
//   "doqquz",
// ];
// let onluq = [
//   "on",
//   "iyirmi",
//   "otuz",
//   "qirx",
//   "elli",
//   "altmis",
//   "yetmis",
//   "seksen",
//   "doxsan",
// ];
// let result = "";
// const numberToText = (number) => {
//   if (number < 10) {
//     result = teklik[5];
//   } else if (number < 100) {
//     number = number.toString();
//     result = onluq[number[0] - 1] + " " + teklik[number[1]];
//   }
//   return result;
// };
// document.write(numberToText(99));

let date = new Date();
let doguldugunMS = new Date(1980, 0, 1).getTime();
let indikiMS = date.getTime();
let ferq = indikiMS - doguldugunMS;
let msToDay = ferq / 1000 / 60 / 60 / 24;
document.write(parseInt(msToDay));
