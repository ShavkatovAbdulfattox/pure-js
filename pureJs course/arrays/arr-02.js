// The new feature es2022

const arr = [21, 12, 34];
console.log(arr.at(0));
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 13003];

for (const move of movements) {
  if (move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdrew ${Math.abs(move)}`);
  }
}

// it to loop over the array and in each iteration it will execute thi CB function there, also as the forEach method calls this callback function in each iteration it will pass in the current element of the array aas a argument
movements.forEach((move) => {
  if (move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdrew ${Math.abs(move)}`);
  }
});

// ! WE used callback function to tell another higher order exactly what to do and so we tell to foreach that in each iteration it should log one of this strings to console

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, i, arr) => {
  console.log(`${i}:${value}`);
});
