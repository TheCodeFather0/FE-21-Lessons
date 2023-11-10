// let en = +prompt('duzbucaqlinin enini daxil edin...')
// let uzunluq = +prompt('duzbucaqlinin uzunlugunu daxil edin...')
// let sahe = en * uzunluq;

// let dogumIli = +prompt("necenci ilde anadan olmusunuz...?");
// let indikiIl = 2023;
// let yas = indikiIl - dogumIli;

// let km = +prompt('km daxil edin');
// let mile = 0.6214
// let kmToMile = km * mile

/*
    double -> 2.5
    integer -> 2
*/

// let r = 11 % 3;
// document.write(r);
// let ad = 'ramin'

// let a = 1;
// let b = a++;
// document.write("a: ", a, "<br/ >");
// document.write("b: ", b);

// document.write("a++: ", a++, "<br/ >"); // 1
// document.write("++a: ", ++a, "<br/ >"); // 3
// document.write("a: ", a, "<br/ >"); // 3

// let a = 2;

// a += 5 // a = a + 5;
// a -= 5 // a = a - 5;
// a *= 5 // a = a * 5;
// a /= 5 // a = a / 5;
// document.write(a);

// let qonsununYasi = 42;
// let qonsununAtasininYasi = qonsununYasi + 20;

// let a = 1;
// let b = 1;
// let c = ++a;
// let d = c++;

// document.write("a: ", a, "<br />");
// document.write("b: ", b, "<br />");
// document.write("c: ", c, "<br />");
// document.write("d: ", d, "<br />");

let a = 5;
let b = "5";

// document.write(a != b); //true or false
// document.write(!false);
// document.write("abc" > "abC");

// alert(5 > 4); // true
// alert("apple" > "pineapple"); //false
// alert("2" > "12"); // true
// alert(undefined == null); // true
// alert(undefined === null);   // false
// alert(null == " 0 "); // false
// alert(null <= 0); // ?

// let ad = prompt("adin nedir?");
// let yas = +prompt("yasin necedir?");

// eger yas > 18den console.log('salam cenab ad') eger boyuk deyilse
// console.log('sizin yasiniz catmir')

// if (yas > 18) {
//   console.log("salam cenab " + ad);
// } else {
//   console.log("sizin yasiniz catmir");
// }

// let name = prompt("what is your name?");
// let gender = prompt("what is your gender? (m / f)");

// if (gender === "m" || gender === "M") {
//   document.write("hi MR. " + name);
// } else if (gender === "f" || gender === "F") {
//   document.write("hi MRS. " + name);
// } else {
//   document.write("duzgun deyer daxil edilmeyib...");
// }

// let carColor = "black";
// let carYear = 1887;

// if (carColor === "black" && carYear === 1887) {
//   document.write("men masini aldim");
// } else {
//   document.write("men piyada qaldim");
// }

// let yas = 19;
// if ("salam") {
//   document.write("salam dunya");
// } else {
//   document.write("sagol dunya");
// }

// truthy ->
// falsy -> 0,null,undefined,false,"",NaN

// ternary
// let yas = 19;
// document.write(yas > 18 ? true : false);

let name = prompt("what is your name?");
let gender = prompt("what is your gender? (m / f)");

switch (gender) {
  case "m":
  case "M":
    document.write("hi MR. " + name);
    break;
  case "f":
  case "F":
    document.write("hi MRS. " + name);
    break;
  default:
    document.write("duzgun deyer daxil edilmeyib");
}
