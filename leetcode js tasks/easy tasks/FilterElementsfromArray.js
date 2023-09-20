/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.filter((num, i) => fn(num, i));
};

console.log(filter([1, 2, 3], firstIndex));
function greaterThan10(n) {
  return n > 10;
}
function firstIndex(n, i) {
  return i === 0;
}
