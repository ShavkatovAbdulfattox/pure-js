// ! Object constructors
/**
 * * So //? what is the object constructors ?
 * * A constructor is a special function which creates and initializes an object instance of a class
 *  * In javaScript constructors gets called when  // ! "new" keyword created
 *  * // ? What happen when constructors get called ?
 *  * The prototype data property of a Function instance is used when the function
 *  * is used as a constructor with the  new empty Object is creatednew operator. It will become the new object's prototype.
 *  * // ! A
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
console.log(Object);

// object literal
const obj = {
  name: "abdul",
  age: 45,
  isSpeaking: true,
};

const car = new Object();
car.name = "mercedes";
car.year = 1885;
console.log(car);

obj.getOwnProperty();

// !
const person = new Object();
person.age = 45;
person.voice = () => {
  console.log(this);
  console.log(`My age is ${this.age}`);
};
person.voice();
