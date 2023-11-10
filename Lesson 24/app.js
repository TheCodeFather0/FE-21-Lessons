// const cpudakiReqem = 36;
// let istifadecininTapdigiEded = +prompt("reqemi texmin edin... (0 - 50)");
// let message;
// let addimSayi = 1;

// while (istifadecininTapdigiEded !== cpudakiReqem) {
//   if (istifadecininTapdigiEded > cpudakiReqem) {
//     message = "Asagi dus";
//     addimSayi++;
//   } else {
//     message = "yuxari qalx";
//     addimSayi++;
//   }
//   istifadecininTapdigiEded = +prompt(message);
// }

// if (addimSayi >= 2 && addimSayi <= 5) {
//   winnnerMessage = "kapital bank hesabinda 750AZN kocuruldu <br />";
// } else if (addimSayi >= 6 && addimSayi <= 9) {
//   winnnerMessage = "kapital bank hesabinda 250AZN kocuruldu <br />";
// } else if (addimSayi >= 10) {
//   winnnerMessage = "siz bize 250AZN borclandiniz <br />";
// }

// document.write(winnnerMessage);
// document.write(`siz duzgun cavabi ${addimSayi} addima tapdiniz...`);

// let verilenEded = +prompt("ededi daxil edin");
// let cem = 0;
// for (let i = 0; i <= verilenEded; i++) {
//   cem += i;
// }

// console.log(cem);

// for (let i = 5; i >= 1; i--) {
//   for (let k = 0; k < i; k++) {
//     document.write("*");
//   }
//   document.write("<br />");
// }

// DRY-> Dont Repeat Yourself

// let count = 1;
// function meniSalamla() {
//   count++;
//   document.write(count);
// }
// meniSalamla();
// meniSalamla();
// meniSalamla();
// meniSalamla();
// meniSalamla();
// meniSalamla();

// let emi = "Renat"; //global variable
// function eminiSalamla() {
//   let emi = "Ramin"; //local variable
//   document.write(`Salam ${emi} emican! <br />`);
// }//scope

// eminiSalamla(); //Ramin
// document.write(emi); //Renat

// function eminiSalamla(emi, message) {
//   //parameter
//   document.write(`${message} ${emi} <br />`);
// }
// eminiSalamla("Ramin", "salam emi"); //argument
// eminiSalamla("Renat", "salam aga");
// eminiSalamla("Lacinli", "esq olsun emiye -> ");

// cem(5);
// cem(5, 9);
// cem(5, 7);
// function cem(a, b = 1) {
//   document.write(`${a} + ${b} = ${a + b} <br />`);
// } //default value

//hoisting
//closure

// function sayHello() {
//   let hiMessage = "salam dunya...";
//   if (true) {
//     document.write(`${hiMessage} <br />`);
//   }
// }

// sayHello();

// function cem(a = 0, b = 0, enter = "") {
//   return `${a} + ${b} = ${a + b} ${enter}`;
// }

// document.write(cem(4, 5, "<br />"));
// document.write(cem(4, 5, "<br />"));
// console.log(cem(4, 5));

// function getDayOfWeek(day) {
//   let message;
//   switch (day) {
//     case 1:
//       message = "bazar ertesi";
//       break;
//     case 2:
//       message = "cersenbe axsami";
//       break;
//     case 3:
//       message = "cersenbe";
//       break;
//     case 4:
//       message = "cume axsami";
//       break;
//     case 5:
//       message = "cume";
//       break;
//     case 6:
//       message = "senbe";
//       break;
//     case 7:
//       message = "bazar";
//       break;
//   }

//   return message;
// }
// document.write(getDayOfWeek(+prompt("gunu daxil edin...")) + "<br />");
// document.write(getDayOfWeek(+prompt("gunu daxil edin...")) + "<br />");
// document.write(getDayOfWeek(+prompt("gunu daxil edin...")) + "<br />");

function calculator(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = `${num1} + ${num2} = ${num1 + num2}`;
  } else if (operator === "-") {
    result = `${num1} - ${num2} = ${num1 - num2}`;
  } else if (operator === "*") {
    result = `${num1} * ${num2} = ${num1 * num2}`;
  } else if (operator === "/") {
    result = `${num1} / ${num2} = ${num1 / num2}`;
  } else if (operator === "**") {
    result = `${num1} ** ${num2} = ${num1 ** num2}`;
  } else if (operator === "%") {
    result = `${num1} % ${num2} = ${num1 % num2}`;
  } else {
    result = "sen riyaziyyati bilmirsen...";
  }

  return result;
}

let num1 = +prompt("numbiri daxil ele");
let num2 = +prompt("numikini daxil ele");
// let operator = prompt("operatoru daxil ele");

document.write(
  calculator(num1, num2, prompt("operatoru daxil ele")) + "<br /> <br />"
);
