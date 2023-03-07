"use strict";

const flight = "KD54";
const john = {
  name: "Jonas Smith",
  passport: 5454654,
};
const checkIn = (flightNum, passenger) => {
  flightNum = "LJ564";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 5454654) {
    console.log("check in");
  } else {
    console.log("Wrong passport");
  }
};
checkIn(flight, john);

console.log(flight);
console.log(john);

const passport = (person) => {
  person.passport = Math.trunc(Math.random() * 10000000);
};
passport(john);
checkIn(flight, john);

// ! HIGH ORDER FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// high order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
};
transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", upperFirstWord);

// ! closure functions => just for looking no deeper
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greatArr = (a) => (b) => console.log(a, b);

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("John");

// * ========================== *
// bind, call, apply

const aza = {
  airline: "lol54",
  lataCode: "KL",
  bookings: [],
  book(num, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.lataCode}${num}`
    );
  },
};

// const fun = (rate, value) => (addVat) => {
//   value + value * rate;
// };
// console.log(fun(0.1, 100));

function fun(rate, value) {
  return function (vat) {
    console.log(value + value * (vat ? vat : rate));
  };
}
const ab = fun(0.1, 100);
ab(0.2);

// ! coding challenge b

const pool = {
  question: "What is your favourite programming language ?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswers() {
    const qs = `${this.question} \n ${this.options.join("\n")}`;
    const num = prompt(qs);
    if (num > this.options.length - 1)
      alert(`Answer is ${num} would not make sense, right ?`);
    for (const ans of this.options) {
      if (ans.startsWith(String(num))) {
        this.answers[num] += 1;
      }
    }
    this.displayResults();
  },
  displayResults(type) {
    alert(this.answers);
    if (typeof type === "string") {
      console.log("string", true);
    }
    console.log(type);
  },
};

const ansBtn = document.querySelector(".answer-pool");
ansBtn.addEventListener("click", pool.registerNewAnswers.bind(pool));

// Immediately Invoked Function expression

() => console.log(true)();

{
  const isPrivate = true;
  var notPrivate = false;
}

// ! Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount + "passengers");
  };
};

const booker = secureBooking();
console.dir(booker);

// examples closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 3);
  };
};

const h = function () {
  const b = 98;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// re assigned f function А
h();
f();

// example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log("we are now boarding all" + n + "passengers");
    console.log(`There are three groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// # coding challenge closures

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
