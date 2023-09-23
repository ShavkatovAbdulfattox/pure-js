/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  }

  let insertPosition;
  nums.filter((num, i) => {
    if (num < target) {
      insertPosition = nums.indexOf(nums[i]);
    }
  });
  return insertPosition + 1;
};

// console.log(searchInsert([1, 3, 5, 6], 6));
// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));

// ! Right solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  }
  let insertPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      insertPosition = i + 1;
    } else {
      break; // Once we find the position, we can exit the loop
    }
  }

  // Insert the target at the determined position and return the new position
  nums.splice(insertPosition, 0, target);
  return insertPosition;
};
