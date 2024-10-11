/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0;

  for (const num of nums) {
    single ^= num;
  }
  return single;
};

// console.log(singleNumber([1]));
console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
