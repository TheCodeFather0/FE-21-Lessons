// let str = `${}` //string interpolation
// let str = " ' "
// let str = "Ramin's car";
// let guestList = "Guests:\n * John\n * Peter\n * Mary";
// str = "\u{20331}";
// console.log(str);

let cumle = "salam menim adim ramindir.";

// console.log(cumle.length);
// console.log(cumle[0] + cumle[1] + cumle[2] + cumle[3] + cumle[4] + cumle[5]);

// let ad = "ramin";
// ad[0] = "z";
// ad[1] = "e";
// document.write(ad);

// let name = prompt("enter your name");
// let gender = prompt("enter your gender");
// if (gender.toUpperCase() === "M" ) {
//   document.write("hi mr " + name);
// } else if (gender === "f") {
//   document.write("hi mrs " + name);
// }

// document.write(name.toUpperCase().toLowerCase());

// let soz = prompt("soz daxil edin");
// document.write(sentence.indexOf("JS") + "<br />");
// document.write(sentence.lastIndexOf("JS") + "<br />");
// document.write(sentence[16] + sentence[17]);
// if (sentence.includes(soz)) {
//   document.write("beli soz cumlede var");
// } else {
//   document.write("xeyr soz cumlede yoxdur");
// }
// document.write(sentence.endsWith("eds"));
// document.write(sentence.startsWith("salam dunya") + "<br />");

// let sentence = "salam dunya.Men JS oyrenirem.JS is advanced";
// // let a = sentence.slice(-37, -32);
// let a = sentence.substring(7, 13);
// let b = sentence.substr(7, 13);
// console.log("substring: ", a);
// console.log("substr: ", b);
// console.log(sentence);

//date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dayInWeek = date.getDay();
let ms = date.getMilliseconds();

let days = [
  "bazar ertesi",
  "cersenbe axsami",
  "cersenbe",
  "cume axsami",
  "cume",
  "senbe",
  "bazar",
];
let indikiVaxt = `${day}.${month}.${year} (${days[dayInWeek - 1]})`;

// 02.11.2023 (cume axsami)
