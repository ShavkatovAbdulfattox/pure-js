// //  ** SMALL PROJECT

// function f1(count) {
//   this.textContent = count;
// }

// document.querySelector(".b-1").addEventListener("click", () => {
//   let count = 0;
//   count++;
//   f1.call(document.querySelector(".b-2"), count);
// });

// console.log(true);

// function showName() {
//   console.log("name is cobalt");
// }

// const car = {
//   name: "Cobalt",
//   year: 2022,
//   showName: showName(),
//   info: function () {
//     console.log(`
//         Car name is ${this.name}
//         established is ${this.year}
//     `);
//   },
// };

// const carModel = {
//   name: "Ferrari ",
//   year: 1985,
// };

// car.info.call(carModel);

// function hello() {
//   document.getElementById("demo").innerHTML += this;
// }

// // The window object calls the function:
// window.addEventListener("load", hello);

// const addMessage = (selector, content) => {
//   document.body.style.background = "black";
//   const list = document.createElement("h1");
//   list.innerText = content;
//   list.style.fontSize = `40px`;
//   list.style.color = `white`;

//   selector.append(list);
// };

// const first = document.getElementById("first");

// document.addEventListener("click", () => {
//   addMessage(first, "Page is loading");
// });
// document.addEventListener("scroll", () => {
//   addMessage(first, "Page is loading");
// });

// const obj = {
//   name: "john",
//   year: "19",
//   color: "red",
// };
// console.log(arr);
// for (const obj of obj) {
//   console.log(obj);
//   // localStorage.setItem("name", obj)
//   ;
// }

// const name2 = localStorage.getItem("name");
// console.log(name2);

// const cols = document.querySelectorAll(".col");

// document.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   if (e.code.toLocaleLowerCase() === "space") {
//     setRandomColors();
//   }
// });

// document.addEventListener("click", (e) => {
//   const type = e.target.dataset.type;

//   if (type === "lock") {
//     const node =
//       e.target.tagName.toLocaleLowerCase() === "i"
//         ? e.target
//         : e.target.children[0];
//     node.classList.toggle("fa-lock-open");
//     node.classList.toggle("fa-lock");
//   } else if (type === "copy") {
//     copyClickBoard(e.target.textContent);
//   }
// });

// const getRandomRgba = () => {
//   const hexCodes = "0123456789ABCDEF";
//   let color = "";

//   for (let i = 0; i < 6; i++) {
//     color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//   }
//   return "#" + color;
// };

// function copyClickBoard(text) {
//   return navigator.clipboard.writeText(text);
// }

// function setRandomColors() {
//   cols.forEach((col) => {
//     const isLocked = col.querySelector("i").classList.contains("fa-lock");
//     const text = col.querySelector("h2");
//     const btn = col.querySelector("button");
//     const color = chroma.random();

//     // saveOnLocalStorage(color)

//     if (isLocked) return;

//     text.textContent = color;
//     let bg = (col.style.background = color);
//     JSON.parse(localStorage.setItem("lastname", bg));
//     setTextColor(text, color);
//     setTextColor(btn, color);
//   });
// }

// function setTextColor(text, color) {
//   const luminance = chroma(color).luminance();
//   text.style.color = luminance > 0.5 ? "black" : "white";
// }

// setRandomColors();

// function saveOnLocalStorage() {
//   localStorage.getItem("lastname");
// }
// saveOnLocalStorage();
