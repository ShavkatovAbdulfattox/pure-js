// // Data

// const account1 = {
//   owner: "James Schmedtmann",
//   movements: [200, 450, -450, 3000, -200, 650, 40, 1200],
//   interestRate: 1.2, //%
//   pin: 1111,
// };
// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3200, -1000, 8500, -30],
//   interestRate: 1.5, //%
//   pin: 2222,
// };
// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7, //%
//   pin: 3333,
// };
// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1, //%
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const bankDeposit = accounts
//   .flatMap((mov) => mov.movements)
//   .filter((dep) => dep > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDeposit);

// // 2

// // const numDeposits1000 = accounts
// //   .flatMap((mov) => mov.movements)
// //   .filter((dep) => dep > 1000);

// // 2 part 2

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(numDeposits1000);

// // 3 practice
// console.log("======practice 3 ==========");

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //   cur > 0 ? (sums.deposits += cur) : (sums.withdraws += cur);
//       // ! conditionally
//       sums[cur > 0 ? "deposits" : "withdraws"] += cur;
//       return sums;
//     },
//     { deposits: 0, withdraws: 0 }
//   );
// console.log(sums);

// // 4.

// const convertTitleCase = (title) => {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   const exceptions = [
//     "a",
//     "an",
//     "the",
//     "but",
//     "not",
//     "or",
//     "on",
//     "in",
//     "and",
//     "with",
//   ];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(" ");

//   return capitalize(titleCase);
// };
// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with a EXAMPLE"));

//  ! PRACTICE
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];
//  1 part
dogs.forEach((dog) => {
  const recFoodPortion = Math.trunc(dog.weight ** 0.75 * 28);
  dog.recFood = Number(recFoodPortion.toFixed(3));
});
// 2 part
const dogSarah = dogs.find((name) => name.owners.includes("Sarah"));

// 3 part
const ownerEatToMuch = dogs
  .filter((dog) => dog.recFood >= dog.curFood)
  .flatMap((dog) => dog.owners);

const ownerEatToLow = dogs
  .filter((dog) => dog.recFood <= dog.curFood)
  .flatMap((dog) => dog.owners);

// 4 part

const sentenceMuch = `${ownerEatToMuch.join(" and ")}'s dogs eat too!`;
const sentenceLower = `${ownerEatToMuch.join(" and ")}'s dogs eat lower!`;

// 5 part
const EXACTLY = dogs.some((dog) => dog.curFood === dog.recFood);

// 6 part

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7 part
console.log(dogs.filter(checkEatingOkay));

// 8 part

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
