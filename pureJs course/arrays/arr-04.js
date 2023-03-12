// Coding challenge

const checkDogs = (dogsJulia, dogsKate) => {
  const arr = [...dogsJulia];
  arr.pop();
  arr.shift();
  const bothArr = [...arr, dogsKate];
  bothArr.forEach((age, i) => {
    if (age > 3) {
      console.log(`Dog number ${i} is an adult, and is ${age}years old`);
    } else {
      console.log(`Dog number ${i} is still puppy 🐶image.png`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// TEST DATA 1: Julia's data [3,5,2,12,7], Kate's data [4,1,15,8,3]

// ! map => array method
const movements = [5000, 3400, -150, -790, -3200, -1000, 8500, -30];

const euroToUsd = 1.1;

const movementsUsd = movements.map((num) => {
  return num * euroToUsd;
});
console.log(movementsUsd);

// ! filter

const deposit = movements.filter((mov) => mov > 0);
console.log(deposit);

console.log("==========Reduce================");
// ! reduce
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // The first paramet is the accumalator => it is like snow ball
console.log(balance);

// Maximum value

const maximum = movements.reduce((acc, max) => {
  return acc < max ? (acc = max) : acc;
}, movements[0]);
console.log(maximum);

// ! Coding challenge #2
console.log("--------------CODING CHALLENGE---------------");
const calcAverageHumanAge = (dogAge) => {
  const dogs = dogAge
    .map((age) => {
      let humanAge = 0;
      if (age <= 2) {
        humanAge += 2 * age;
      } else {
        humanAge += 16 + age * 4;
      }
      return humanAge;
    }, 0)
    .filter((age) => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  console.log(dogs);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log("--------------CODING CHALLENGE---------------");

console.log("============ Chaining methods =================== \n");
// ! The Magic of Chaining Methods
const totalDepositUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => {
    return acc + mov;
  }, 0);
console.log(totalDepositUsd);

// ! find method
// TODO: unlike the filter method a defined method will actually not a new array but it will return the first element in the array, in other words the first element in the array for which this operation here becomes true , and so basically this here will return the first withdraw

const firstWithdraw = movements.find((mov) => mov < 0);
//  ! MOre example is in the arr-03.js
// ! find method example
// const acc = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(acc);
// for (const acc of accounts) {
//   if (acc.owner === "Jessica Davis") break;
//   console.log(acc);
// }

// ! some and every methods in js
console.log("==================== some And every =====================");
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

// ! every will only return true if all of elements in the array satisfy condition
console.log(movements.every((mov) => mov > 0));

// ! Flat and flatMap methods

const arr = [[1, 2, 3], [2, 4, 5], 7, 8];
console.log(arr.flat());

const arrDeep = [
  1,
  [2, 3, [1, 2]],
  [
    4,
    [
      45,
      [
        45,
        [
          54,
          [
            5789,
            574,
            [454, [54554, 787, 454, 545, 54, 454, [54, 454, 54, 54, [4, 454]]]],
          ],
        ],
      ],
    ],
  ],
  [4, 5, [7, 8]],
  8,
  9,
];
console.log(arrDeep.flat(23));

// In this article, I briefly discussed what arrays are and how useful they are in JavaScript. Then we learned about the two new important array methods which were introduced in ECMAScript 2019 that let you change an original array into a new array.

// These new array methods are the flat() and flatMap() methods.

// You use the flat() method for concatenating sub-arrays recursively into a single array. The flat() method takes a depth value as its parameter which is optional depending on the depth of the array you wish to flatten (concatenate). The flat() method takes in 1 as a depth by default.

// On the other hand, flatMap() works basically the same expect that it is a combination of the map() and flat() methods together. flatMap() loops through the elements in the array and concatenates the elements.

// ! sort => this method is muated the original array, This method is sorting arrays based on the strings
// Strings
const owners = ["Jonas", "Zack", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
const number = [12, 54, -8748, 54, 1, 2, 9, 7, 6, 3];

// TODO: callback function called with two elements, this two parameters are the current value and the next value

// ! ascending means that we want to go from small to large
// return < 0 A, B
// return > 0 B, A
// Ascending order
number.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(number);

// Descending order
number.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(number);
