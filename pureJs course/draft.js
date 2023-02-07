//  *** The javaScript projects
// ! https://foolishdeveloper.com/?s=javascript
//  ***

//  ? something wrong here

function compareNumber(numberI, numberJ) {
  if (numberI === numberJ) {
    console.log(`the  ${numberI} === ${numberJ} \n \t \n \ ? `);
  } else console.log(false);
}
function checkNumber(numberI, array, i) {
  for (let j = i + 1; j < array.length; j++) {
    const arrayJ = array[j];
    compareNumber(numberI, arrayJ);
  }
}

function duplicateNumber() {
  const array = [2112, 65, 45, 65, 45, 489, 31, 874];
  for (let i = 0; i < array.length; i++) {
    checkNumber(array[i], array, i);
  }
}
const identity = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!

duplicateNumber();

//  ** =================================================== **

// ! with primitive data types you can not change value from paramert of the function
// function changeX(x) {
//   console.log(x);
//   x = 5;
//   console.log(x);
// }

// let x = 45;

// changeX(x);
// console.log(x);
// !

function example(x) {
  console.log(x);
  x = 45;
  console.log(x);
}

let y = {
  value: 20,
};
console.log(y.value);
example(y.value);
console.log(y.value);
