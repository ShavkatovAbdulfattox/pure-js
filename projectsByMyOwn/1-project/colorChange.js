// ** Variables
// ! Tomorrow learn slice method how it is actually work

const container = document.querySelector(".change"),
  hash = document.querySelector(".hash span"),
  btn = document.querySelector("button");

// ** Functions

function generateColor(x, y, z, cb) {
  const rgb = `rgb(${x}, ${y},${z})`;
  this.style.background = rgb;
  let newRgb = rgb.slice(3);
  hash.textContent = newRgb;

  copyContent(rgb);
}

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Content copied to clipboard " + text);
  } catch (err) {
    alert("Failed to copy: ", err);
    console.error("Failed to copy: ", err);
  }
};

// ** Events

btn.addEventListener("click", () => {
  let rgb1 = Math.floor(Math.random() * 255),
    rgb2 = Math.floor(Math.random() * 255),
    rgb3 = Math.floor(Math.random() * 255);

  generateColor.apply(container, [rgb1, rgb2, rgb3]);
});

// *** Examples

// function owner() {
//   this.textContent = "hello world";
//   console.log(this);
// }
// btn.addEventListener("click", () => {
//     owner.call(btn)
// });

//  method slice

// let rgb = "rgb(255,15,84)",
//   newRgb = rgb.slice(3);
// console.log(newRgb);

// let value = 8;
// function isPrime(value) {
//   if (!isPrime.answers) {
//     isPrime.answers = {};
//   }
//   if (isPrime.answers[value] !== undefined) {
//     return console.log("undefined ", isPrime.answers[value]);
//   }

//   for (let i = 2; i < value; i++) {
//     var prime = value !== 0 && value !== 1;
//     // console.log(prime);
//     if (value % i === 0) {
//       console.log(value);
//       prime = false;
//       console.log(prime);
//       break;
//     } else {
//       console.log(i);
//     }
//   }

//   return (isPrime.answers[value] = prime);
// }

// console.log("function: ", isPrime(value));

function John() {
  age: 25;
  console.log(age);
}

console.log((John.age = "john"));
// console.log(John("johnKey"));

John();
