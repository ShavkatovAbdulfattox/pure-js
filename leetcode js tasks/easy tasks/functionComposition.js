/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, f) => {
      return f(acc);
    }, x);
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);

console.log(fn(1));
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// const arr = [
//   [0, 1],
//   [4, 1],
// ];
// let numbers = [1, 2, 3, 4];

// // // function that adds last two values of the numbers array
// // function sum_reducer(accumulator, currentValue) {
// //   return accumulator + currentValue;
// // }

// // returns a single value after reducing the numbers array
// let sum = numbers.reduceRight((prev, currentValue) => {
//   return prev;
// });

// console.log(sum);
