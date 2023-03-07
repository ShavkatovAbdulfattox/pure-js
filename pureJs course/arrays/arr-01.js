let arr = ["a", "b", "c", "d", "fr", "sdk"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// SPLICE => it is work almost same as a slice method but fundamental difference is THAT IT DOES ACTUALLY CHANGE THE ORIGINAL ARRAY, mutates
console.log("\t\n-------------SPLICE-------------\n");
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// REVERSE => it is mutate the original array
console.log("\t\n-------------REVERSE-------------\n");

const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
arr2.reverse();
console.log(arr2);

// CONCAT
let str = "hello";
const letters = arr2.concat(str);
console.log(letters);
