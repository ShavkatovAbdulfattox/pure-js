// ! Object create
// ? What is the object create
/*
 * The Object.create() static method creates a new object,
 *  using an existing object as the prototype of the newly created object.
 ! The object create takes to 2 params both of them are the object
 */

const person = Object.create(
  {
    // ! We can point ot the property of the new created object
    calculateAge() {
      console.log("Agw,", this.birthYear);
    },
  },
  {
    // ! * The value  in each cases is an object , which can be define the value and the property attributes
    name: {
      value: "Person",
      // ! Property descriptors => js object that contains one or more property descriptors
      // * Creates obj that has the specified prototype,
      // * and that optionally contains specified properties
      enumerable: true, // => this allows us to iterate ,
      writable: true, // => this is mean that we can change the value , by default every property descriptor = false
      configurable: true, // this allow to manipulate with keys of this object // ! That permit us to delete some of the value from the obj
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

const obj = {
  name: "obj",
  isIterable: false,
  year: 2004,
};
// ! The Object.getOwnPropertyDescriptor => method allows to query the full information about a property
//  * and returns a property descriptor for an own property (that is, one directly
//  * present on an object and not in the object's prototype chain) of a given object.

const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, "name");
propertyDescriptor.writable = false;
propertyDescriptor.enumerable = false;
propertyDescriptor.configurable = false;

console.log(obj);
console.log(propertyDescriptor);

//  superClass
const Shape = function () {
  this.x = 0;
  this.y = 0;
};

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.log("rect is moved");
};

const Rectangle = function () {
  Shape.call(this); // call super constructor.
};
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
const rect = new Rectangle();
rect.move(1, 2);
