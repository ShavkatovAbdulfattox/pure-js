// Given an array of integers nums and an integer target, return indices of the two
// numbers such that they add up to target. You may assume that each input would
// have exactly one solution, and you may not use the same element twice. You can
// return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// ! The first small solution
// const twoSum = function (nums, target) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num === target) {
//       res.push(i);
//     }
//   }
//   return res;
// };

// console.log(twoSum([2, 7, 11, 9, 15], 9));

const twoSum = function (numbers, target) {
  let res;
  for (let i = 0; i < numbers.length; i++) {
    const numI = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const numJ = numbers[j];
      if (numI + numJ === target) {
        res = `The sum of ${parseInt(numI)} and ${parseInt(numJ)} is ${parseInt(
          target
        )}. Therefore, index1 = ${parseInt(
          i < numbers.length ? i + 1 : i
        )}, index2 = ${parseInt(j < numbers.length ? j + 1 : j)}. We return [${[
          i + 1,
          j + 1,
        ]}]}.`;
      }
    }
  }
  return res;
};

console.log(twoSum([-1, 0], -1));
