// function a() {
//   let count = 7;
//   return function b() {
//     console.log(count);
//   };
// }

// let c = a();
// c = null;

//error handling

// try {
//   console.log(a);
// } catch (err) {
//   console.log(err.message);
// }
// console.log("salam");

// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     // throw new SyntaxError("Incomplete data: no name"); // passing the message to the constructor
//   }
//   alert(user.name);
// } catch (e) {
//   alert("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
// }

// let user = {
//   name: "Renad",
//   age: 15,
// };

// try {
//   let { name, nickName, age } = user;
//   if (!nickName) {
//     throw new SyntaxError("nickname daxil edilmeyib");
//   }
//   document.write(`name: ${name}  <br />nickname: ${nickName} <br />age:${age}`);
// } catch (err) {
//   document.write("<br />" + err.message);
// } finally {
//   alert("ok");
// }

// //JSON
// const data = {
//   name: "Renad",
//   surname: "Cahangirov",
//   nickName: "StarshiBrat",
//   age: 15,
// };
// const json = JSON.stringify(data);
// let obj = JSON.parse(json);

// console.log(data);
// console.log(json);
// console.log(obj);
// {
//     ""
// }

// xhr
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.send();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const users = JSON.parse(xhr.response);
//     console.log(users);
//     users.forEach((user) => {
//       console.log(user.name);
//     });
//   }
// };

const _URL = "https://jsonplaceholder.typicode.com/users/";
//fetch
// fetch(URL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach(({ name }) => {
//       console.log(name);
//     });
//   });

//axios
const users = document.getElementById("users");
// axios(URL).then(({ data }) => {
//   data.forEach(
//     ({
//       name,
//       username,
//       website,
//       company: { name: CN },
//       address: { street },
//     }) => {
//       const content = `<div class="col-4 border">
//           <p>${name}</p>
//           <p>${username}</p>
//           <p>${website}</p>
//           <p>${CN}</p>
//           <p>${street}</p>
//         </div>`;
//       users.innerHTML += content;
//     }
//   );
// });

//asynchron
// async function a() {
//   console.log("salam a");
// }
// async function b() {
//   console.log("salam b");
// }
// a();
// b();

// const getData = async () => {
//   const { data } = await axios(URL);
// };

// getData();

const { data } = await axios(URL);
console.log(data);
