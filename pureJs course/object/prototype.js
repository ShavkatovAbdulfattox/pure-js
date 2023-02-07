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
