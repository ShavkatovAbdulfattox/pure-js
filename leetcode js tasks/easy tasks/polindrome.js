const isPalindrome = function (x) {
  const arr = [...parseint(x)];
  if (parseInt(arr.reverse().join("")) === parseInt(arr.join(""))) {
    console.log(
      `${arr.join("")} reads as ${arr
        .reverse()
        .join("")} from left to right and from right to left.`
    );
  } else if (parseInt(arr.reverse().join("")) !== parseInt(arr.join(""))) {
    console.log(
      `From left to right, it reads ${arr.join(
        ""
      )}. From right to left, it becomes ${arr
        .reverse()
        .join("")}. Therefore it is not a palindrome.`
    );
  }
};

isPalindrome(-121);

// console.log([...a].reverse().join(""));

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
