/**
 * * Object entries => is the object method , which convert objects to an array
 * * Object fromEntries => it is the opposite of the entries method which was introduced in es6,
 * * it is convert array to the object, // ! Important // the array must have just 2 elements
 * * The first element is the property name , and second is the property value
 */
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

const item = Object.entries(arr);
console.log(item);
console.log(item.name);
console.log(item.age);
item.info();
// console.log(item.info());

// ! Object constructors
/**
 * * So //? what is the object constructors ?
 * * A constructor is a special function which creates and initializes an object instance of a class
 *  * In javaScript constructors gets called when  // ! "new" keyword created
 *  * // ? What happen when constructors get called ?
 *  * // ! A new empty Object is created
 *  * // ! The this keyword refers to the new object , and its become current instance object
 *  * // ! The new object is then returned  as the return value of the constructor
 *  * BEST practice object constructors should used by the UpperCamelCase
 */

function Car(model, year) {
  // * This key word will will assign to the new object
  // ! this = {}

  // * Within help of "new.target", you can force of the callers using by the keyword "new",
  // * Otherwise you could throw an error
  if (!new.target) {
    throw Error(
      "This is function constructor and it must uses by the keyword new "
    );
  }

  this.model = model;
  this.year = year;

  this.info = function () {
    console.log(
      `The model: ${this.model}\n and the year was created in ${this.year}`
    );
  };

  // * This will be returned
  // return this
}

const mercedes = Car("Mercedes Benz", 1940);
mercedes.info();

// * The prototype

//  ? What is prototype ?
//  * THe prototype is the object , which every object has.
// * The prototype is stored in the prototype of property function
// *
// *

// every object has it is own prototype which takes from its parent ,
// from which was created object

// ? How to get parent prototype
// ! to get parent prototype we use
// __proto__ // * was introduced in es 6
// getPrototypeOf() // * es 5

function OperatingSystem(model, year) {
  this.model = model;
  this.year = year;
}

// ! with the code below we could to extend functional of this class
OperatingSystem.prototype.voice = function () {
  console.log(`Os ${this.model} cool`);
};

const mac = new OperatingSystem("macOS", 1922);
// This is field which is pointer of the object, which has constructor, and corresponding fields, which will be added to the objects which will created by OperatingSystem this class

mac.voice();
// setPrototypeOf();
// getPrototypeOf();

// ! Object create
// ? What is the object create
/**



//  * *The object create takes to 2 params both of them are the object
//  */

const person = Object.create(
  {
    // ! We can point ot the property of the new created object
    calculateAge() {
      console.log("Agw,", this.birthYear);
    },
  },
  {
    name: {
      value: "Person",
      enumerable: true, // => this allows us to iterate ,
      writable: true, // => this is mean that we can change the value , by default every property descriptor = false
      configurable: true, // this allow to manipulate with keys of this object // ! That permit us to delete some of the value from the obj
      // ! Property descriptors => js object that contains one or more property descriptors
      // * Creates obj that has the specified prototype,
      // * and that optionally contains specified properties
    },
    birthYear: {
      value: 1950,
      enumerable: true,
    },
    age: {
      get() {
        return console.log(new Date().getFullYear() - this.birthYear);
      },
      set(value) {
        document.body.style.background = "red";
        return console.log("set age :", value);
      },
    },
  }
);
for (const key in person) {
  if (person.hasOwnProperty(key)) console.log("key", key, person[key]);
}

console.log(person);
