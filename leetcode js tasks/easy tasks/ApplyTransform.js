/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map((num, i) => fn(num, i));
};
console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
