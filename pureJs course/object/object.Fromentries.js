/**
 * * Object entries => is the object method , which convert objects to an array
 * * Object fromEntries => it is the opposite of the entries method which was introduced    in es6,
 * * it is convert array to the object, // ! Important // the array must have just 2 elements
 * * The first element is the property name , and second is the property value
 */

const obj = {
  name: "Abdulfattox",
  age: "1118",
  isSleeping: "false",
  info: function () {
    console.log("This is a object");
  },
};
// ! Object.entries(obj) =. it returns
//  * An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.
const itemObj = Object.entries(obj);
console.log(itemObj);

const arr = [
  ["name", "Abdulfattox"],
  ["age", "1118"],
  ["isSleeping", "false"],
  [
    "info",
    function () {
      console.log(`hello`);
    },
  ],
];

const item = Object.fromEntries(arr);
console.log(item);
console.log(item.name);
console.log(item.age);
item.info();
// console.log(item.info());
