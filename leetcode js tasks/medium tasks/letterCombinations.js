/**
 * @param {string} digits
 * @return {string[]}
 */

const numbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
const letterCombinations = function (digits) {
  if (!digits || digits == "1") return [];

  let result = [""];

  for (const digit of digits) {
    // 2 3
    const letters = numbers[digit];
    //  2: ["a", "b", "c"],
    //  3: ["d", "e", "f"],

    const tempList = [];

    for (const combination of result) {
      // ""
      for (const letter of letters) {
        tempList.push(combination + letter);
      }
    }
    result = tempList;
  }
  return result;
};

console.log(letterCombinations("23"));
