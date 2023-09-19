/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function (nums, fn, init) {
  let result;

  if (init !== undefined) {
    result = init;
  } else {
    result = nums[0];
    nums = nums.slice(1);
  }

  result = nums.reduce((acc, cur) => {
    return fn(acc, cur);
  }, result);

  return result;
};

// function sum(accum, curr) {
//   return accum + curr;
// }
function sum(accum, curr) {
  return accum + curr * curr;
}
// function sum(accum, curr) {
//   return 0;
// }
console.log(reduce([1, 2, 3, 4], sum, 100));
