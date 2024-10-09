/**
 * @param {number} x
 * @return {number}
 */

// BIG (0)
// var mySqrt = function (x) {
//   if (x === 0 || x === 1) return x;
//   if (x < 0) return NAN;
//   let temp = x;

//   while (x--) {
//     if (x * x <= temp) {
//       return x;
//     }
//   }
// };

//  Binary algorithmic approach

var mySqrt = function (x) {
  // 200
  if (x === 0 || x === 1) return x; // Handle edge cases for 0 and 1
  if (x < 0) return NaN; // Return NaN for negative numbers

  let left = 1; // Start left from 1 (since 0 and 1 are already handled)
  let right = Math.floor(x / 2); // Right boundary is x/2 for optimization  // 100

  // 26

  while (left <= right) {
    // 1 <= 100 // left = 13 && right = 12
    // find the mid
    let mid = Math.floor((left + right) / 2); // 50 25 12
    // find the square
    let square = mid * mid; // 50 * 50 = 2500 //2 625 144
    // check if the square is equal
    if (square === x) {
      // skip false skip false  skip false
      return mid;
    }
    // else check if the square is less than x move left pointer up
    else if (square < x) left = mid + 1; // skip skip  13
    // If square is greater than x, move right pointer down
    else {
      right = mid - 1; // 49 // 24
    }
  }
  return right;
};

console.log(mySqrt(200));

// console.log(mySqrt(2147395600));

function recursiveFunction(arr, x, start, end) {
  // check if start is bigger than end return false
  if (start > end) {
    return false;
  }
  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x if it is correct return true
  if (arr[mid] === x) return true;
  // else mid value is greate than x ending index -1
  else if (arr[mid] > x) {
    recursiveFunction(arr, x, start, mid - 1);
    // else
  } else {
    recursiveFunction(arr, x, mid + 1, end);
  }
  console.log(mid);
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
  console.log("Element found!");
} else {
  console.log("Element not found!");
}
