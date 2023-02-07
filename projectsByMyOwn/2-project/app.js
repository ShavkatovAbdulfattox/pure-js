"use-strict";

// const about = {
//   name: "Peter",
//   age: 45,
//   work: {
//     job: "fullstack developer ",
//     located: "USA",
//   },
// };

// const Peter = {
//   info: function () {
//     console.log(`Hello my name is ${this.name}, i am ${this.age} years old.
//     I am working in ${this.work?.located}, my salary is ${this.work?.salary?.sal} `);
//   },
// };

// Peter.info.call(about);

const buttons = document.querySelectorAll(".btn"),
  about = document.querySelector(".content"),
  contentText = document.querySelectorAll(".content-item");

document.addEventListener("DOMContentLoaded", handleClick());

function handleClick() {
  about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      buttons.forEach((btn) => btn.classList.remove("btn-primary"));
      e.target.classList.add("btn-primary");
      contentText.forEach((txt) =>
        txt.classList.remove("content-item__active")
      );
    }
    const elem = document.getElementById(id);
    elem.classList.add("content-item__active");
  });
}

// console.log("new line" + "\n Hello world");
// console.log("new tab" + "\t Hello world");
// console.log("new backSpace" + "\b Hello world");
// console.log("new return " + "itig \return Hello world");
// console.log("new form" + " ifmorin\f Hello world");

// console.log(index);
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(btn.classList.remove("btn-remove"));
    const target = e.target;
    console.log(target);
    btn.classList.contains("btn-primary")
      ? btn.classList.remove("btn-primary")
      : target.classList.add("btn-primary");
    if (!target.classList.contains("btn-primary")) {
      target.classList.add("btn-primary");
    }
  });
});

const move = document.getElementById("move"),
  source = document.querySelector(".content-list"),
  list = document.getElementById("target");

move.addEventListener("click", () => {
  while (source.hasChildNodes()) {
    // console.log(1 + 1);

    const item = source.removeChild(source.firstChild);
    setTimeout(() => {
      list.appendChild(item);
    }, 1000);

    console.log(true);
  }
});

// !Loop iterations

// const arr = [44, 2, 6, 8, 55, 4542, 24, 23, 22, 45, 74];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element % 2 === 1) {
//     console.log("\n The odd number is found \t" + element);
//     continue;
//   }
//   console.log(element);
// }
// console.log("The loop is finished");
