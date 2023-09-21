/**
 * @param {number[]} nums
 * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   const expectedNumbers = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (!expectedNumbers.includes(nums[i])) {
//       expectedNumbers.push(2);
//     }

//     return expectedNumbers;
//   }

//   //   ! The code below is correct but leetcode is requre to solve it using for loop
//   //   if (nums.length === 0) {
//   //     return 0; // If the array is empty, there are no unique elements
//   //   }

//   //   return [...new Set(nums)];
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function (nums) {
  const expectedNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    if (!expectedNumbers.includes(nums[i])) {
      expectedNumbers.push(nums[i]);
    }
  }

  return expectedNumbers;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueNumbers = removeDuplicates(nums);

console.log(uniqueNumbers);
