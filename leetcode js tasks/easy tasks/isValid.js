/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (bracketMap[char] !== top) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// console.log(isValid("()"));
console.log(isValid("(){}}{"));

// ("()");
// ("()[]{}");
// ("(]");
