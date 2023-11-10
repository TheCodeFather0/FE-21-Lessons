let result = null && undefined;
// result = undefined || null;
// result = false || "salam";
// result = "false" && "true";
// result = null || 0
// result = undefined && null;
// result = "elmeddin" && "sabir"
// result = 9999 && '07'
// result = 9999 || '07'
// result = 5 && 0
// result = 5 || 6
// result = "*" && "/"
// result = 8 || 9
// result = false && 0
// result = 0 || "salam"
// resutl = "salam" && 0
// result = "elmeddin" && "salam" || 0
// result = 0 || ("undefined" && null) || "true";
// result = "false" || (false && true && 0) || (undefined && "MasterMind");
// result = "true" && "true" || false || "0" && true && undefined || null

// document.write(result);

/*
    && ||

    a && b
    eger a terefi truthy deyerdeise b-ni qaytarir eks halda a-ni qaytarir
    a || b
    eger a terefi truthy deyerdeise a-ni qaytarir eks halda b-ni qaytarir
*/

/*
    proses tekrarinin qarsisini almaq ucun... (loops)

    for
    while
    do while


*/
// let cem = 1;
// let i = 100;
// for (i; i >= 1; i--) {
//   document.write(i + "<br />");
// }

// let i = 0;
// while (i < 100) {
//   document.write(i + "<br />");
//   i++;
// }

// do {
//   i++;
//   document.write(i + "<br/ >");
// } while (i < 100);

let cem = 0;
let i = 0;
// while (i <= 100) {
//   if (i % 2 === 0) {
//     cem += i;
//   }
//   i++;
// }

// for (i; i <= 100; i++) {
//   if (i % 2 === 0) {
//     cem += i;
//   }
// }

// document.write(cem);

// for (let i = 1; i <= 5; i++) {
//     document.write(i + "<br />");
//     if (i === 3) {
//         break;
//     }
// }

let student = "Ruhana";
let newRuhana = "";
// R*U*H*A*N*A
// document.write(student[6]);
let simvol = "-";
for (let i = 0; i < student.length; i++) {
  if (i === 0) {
    newRuhana += simvol;
  }
  newRuhana += student[i] + simvol;
}

document.write(newRuhana);
