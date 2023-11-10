// let nums = [1, 2, 3, 4, 12, 5, 6, 11, 23, 45, 36];
// let sortedNums = nums.sort((a, b) => b - a);
// let findElement = nums.find((num, index) => num > 4);
// let filteredElements = nums.filter((num) => num > 10).sort((a, b) => a - b);
// console.log("sortedNums: ", sortedNums);
// console.log("nums: ", nums);

// const filteredElements = nums.filter((num) => num % 2 !== 0);
// console.log(filteredElements);

// const yaxçıHerfler = ["ə", "ü", "ö", "e"];
// yaxçıHerfler.sort();
// console.log(yaxçıHerfler);

let students = ["Aynur", "Gunel", "Ruhana", "Sada", "Elmira"];
// let yaxciTelebeler = students.every((student) => student.length >= 5);
// let yaxciTelebeler = students.every((s) => s.length === 4);
// console.log(yaxciTelebeler);

// let a = students.map((student) => student.toLowerCase());

// console.log(a);
// console.log(students);

// students.forEach((s) => document.write(s + "<br />"));
// for (let value of students) {
//   document.write(value + "<br />");
// }

// students.forEach((s) => document.write(s + "<br />"));
// document.write("---------------------------- <br />");
// students.reverse().forEach((s) => document.write(s + "<br />"));

// propmt ile istifadeciden bir reqem aliriq
// array yaradiram ve istifadecinin yazdigi reqeme qeder olann butun reqemleri o arrayin icerisine push edirem.
// hemin arrayin icerisinden 5e qaliqsiz bolunen reqemlerin hasilini  tapiriq...

let reqem = +prompt("Istediyiniz reqemi daxil edin.");
let arr = [];
let hasil = 1;

for (let i = 1; i <= reqem; i++) arr.push(i);
arr.forEach((reqem) => reqem % 5 === 0 && (hasil *= reqem));

console.log(hasil);


c'est claire?
panyatno?
wakarimashta ka?