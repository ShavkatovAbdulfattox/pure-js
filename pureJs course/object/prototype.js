// ! Prototype => is the object
// * every prototype has it is own proto

// * The prototype

//  ? What is prototype ?
//  * THe prototype is the object , which every object has.
// * The prototype is stored in the prototype of property function
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
// This is field which is pointer of the object, which has constructor, 
// and corresponding fields, which will be added to the objects which will 
// created by OperatingSystem this class

mac.voice();
// setPrototypeOf();
// getPrototypeOf();
//   =======================================================
const Animal = function (obj) {
  this.name = obj.name;
  this.color = obj.color;

  //   this.info = () => {
  //     // console.log("Base voice from ,", this.name);
  //   };
};

// Animal.prototype.voice = function () {
//   console.log("Base voice from ,", this.name);
// };
console.log(Animal.prototype);
dog.info();
// ! this function is constructor

console.log(typeof this);

const Cat = function (opt) {
  Animal.apply(this, arguments);
};

const cat = new Cat({ name: "mura", color: "#fff", hasTail: true });
