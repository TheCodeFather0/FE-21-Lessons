// const a = (ad) => {
//   console.log(`${ad} is active now`);
// };

// a("Samir");
// a("Taleh");
// a("Hüseyn");
//-----------------------------------------------

// const enBoyukEded = (a, b, c) => {
//   if (a > b && a > c) {
//     console.log(`${a} ededi en boyukdur`);
//   } else if (b > c && b > a) {
//     console.log(`${b} ededi en boyukdur`);
//   } else if (c > a && c > b) {
//     console.log(`${c} ededi en boyukdur`);
//   } else {
//     console.log(`ededler beraberdir`);
//   }
// };
// enBoyukEded(0.1, 0.2, 0.6);

//-----------------------------------------------

// function totalSum(rubl, dollar) {
//   let usdToRubl = dollar * 75;
//   let result = rubl + usdToRubl;
//   console.log("Hesabinizda " + result + " rubl mebleg var.");
// }
// totalSum(2000, 45);

//-----------------------------------------------

// const min = (a, b) => (a < b ? a : b);
// console.log(min(3, 4));

//-----------------------------------------------

// const calc = (num1, num2, operator) => {
//   let result;

//   switch (operator) {
//     case "*":
//       result = +num1 * +num2;
//       break;
//     case "+":
//       result = +num1 + +num2;
//       break;
//     case "-":
//       result = +num1 - +num2;
//       break;
//     case "/":
//       result = +num1 / +num2;
//       break;
//   }
//   console.log(result);
// };
// calc(5, 8, "+");

//-----------------------------------------------

// const isLucky = (bilet) => {
//   let b = String(bilet);
//   let ilk = +b[0] + +b[1] + +b[2];
//   let ikinci = +b[3] + +b[4] + +b[5];
//   let result = ilk === ikinci;
//   if (result) {
//     return "bilet shansli biletdir";
//   }
//   return "bilet shansli deyil";
// };
// console.log(isLucky(723321));

//------------------------------------------

// const isEven = (reqem) => {
//   if (reqem % 2 === 0) {
//     return true;
//   }

//   return false;
// };


// const isEven = (reqem) => reqem % 2 === 0 ? true : false
// const isEven = (reqem) => reqem % 2 === 0;