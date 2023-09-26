const arr = ["Adam", "John", "James", "Black", "Simlga"];
// Old version

const newArr = [...arr].sort();

// New version

const newVArr = arr.toSorted();
console.log(newVArr);

// ! ====== NOt Recommended
// // Old version

// const newArr = [...arr];
// newArr[1] = "Khan";
// console.log(newArr);

// // New version

// const NewVAr = arr.with(1, "Kamel");
// console.log(newArr);
