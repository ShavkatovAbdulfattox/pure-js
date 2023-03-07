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

// ! reduce
const balance = movements.reduce((acc, i, arr) => {}, []); // The first paramet is the accumalator => it is like snow ball
console.log();
