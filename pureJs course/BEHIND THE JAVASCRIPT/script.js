// ************************** How the javaScript work behind the scene ***************************************

// ! JavaScript is a high level , object oriented, multi-paradigm programming language
//  * Garbage-collected
// TODO : Garbage-collected => this is an algorithm inside of javaScript engine, which automatically removes old unused objects from the computer memory in order not to clog it up with unnecessary stuff
//  * Multi-paradigm
/**  
 * A programming paradigm is a way or method in which we write code to solve different types of problems. Since there are a lot of ways to code, there are a lot of programming paradigms that developers use to write code.

JavaScript is a multi-paradigm scripting language, which means that it is very dynamic in nature and supports various types of programming styles, such as object-oriented, imperative, and functional programming. 
 * 
 * TODO : Multi-paradigm => in a programming paradigm is an approach and overall mindset of structuring our code which will ultimately direct the coding style and technique in a project that uses a certain paradigm

 * * There are 3 popular paradigm
 * * 1 PROCEDURAL programming
 * * 2 OBJECT-oriented programming
 * * 3 FUNCTIONAL programming
 // ! the definitions
 ** 1 procedural programming is what we have been doing so far which is basically just organizing the code in a very linear way and then with some functions in between .
 ** 2 object oriented programming

// ! We can classify paradigms as imperative and declarative

*/
//  * First-class-function
/**
 * TODO: In a language with first-class functions, functions are simply treated as variable. We can pass them into other functions and return them from functions
 */

console.log(me); // undefined
console.log(goo); // before initialization // ! error
console.log(ago); // before initialization // ! error
var me = "John";
let goo = "lets";
const ago = 1999;

//Destructuring
const nested = [4, 5, [42, 32]];
const [x, , [y, z]] = nested;
console.log(x, y, z);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(21, 12, 1));
add(54, 56, 4, 4);
add(12, 5, 484, 984);

const rest = { name: "halo", num };

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Bortmund",
  players: [
    [
      "Neur",
      "Pavard",
      "Martized",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarrby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schuzi",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Welgi",
      "Witsel",
      "Hazard",
      "Brandit",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const player1 = [
  {
    gk: "Bayern Munich",
    fieldPlayers: [...game.players[0]],
  },
];
const player2 = [
  { gk: "Borrussia Bortmund", fieldPlayers: [...game.players[1]] },
];

const allPlayers = [...game.players];

const playersFinal = [...game.players[0], "Thigo", "Coutino", "Perisic"];
const { team1, team2, x: draw } = game.odds;
const printGoals = (...players) => {
  console.log(
    `The name of all the players : ${allPlayers} \n The number of goals is ${game.score}  and scored by ${players}`
  );
};
printGoals(game.scored);

// console.log(odds);

const menu = ["hbe", "yrk", "rcyj", "jrcjy", "gihr"];
for (const [i, el] of menu.entries()) console.log(i + 1 + " : " + el);

const restaurant = {
  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sun: {
      open: 0,
      close: 24,
    },
  },
};

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic bread");
ordersSet.add("Garlic bread");
ordersSet.delete("Risotto");
console.log(ordersSet);

const uniqueOrders = [...ordersSet];
console.log(uniqueOrders);

//  ! MAP
const map = new Map();
map.set("name", " Classico Italiano"); // ! hel[ to add new element ]
map.set(1, "Firenze, Italy");

map
  .set("categories", ["ifre", "wrg", "wrf", "wrf"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close ;(");

const time = 21;
const checkTime = map.get(time > map.get("open") && time < map.get("close"));
console.log(checkTime);
console.log(map.has()); // ! to check properties existing
map.delete(2);
console.log(map.size);
map.clear();

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
console.log(mySet1);

function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true

const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

gameEvents.delete(64);
const events = [...new Set(gameEvents.values())];
for (const [i, el] of events) {
  if (i < 45) {
    console.log(`[First half] ${i} : ${el}`);
  } else {
    console.log(`[Second half] ${i} : ${el}`);
  }
}
console.log(`An event happened, on average, every 9minutes`);

console.log(events);
