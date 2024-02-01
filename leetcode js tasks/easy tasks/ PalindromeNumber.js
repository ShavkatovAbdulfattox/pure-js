/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const str = x.toString().split("");
  let isEqual;

  if (str.reverse().join("") === x.toString()) {
    isEqual = true;
  } else {
    isEqual = false;
  }

  return isEqual;
};

console.log(isPalindrome(11));
