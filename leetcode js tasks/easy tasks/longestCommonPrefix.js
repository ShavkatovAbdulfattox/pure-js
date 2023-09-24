// ! 3 Solution  Right solution
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return " ";
  }

  strs.sort((a, b) => a.length - b.length);

  const reference = strs[0];

  for (let i = 0; i < reference.length; i++) {
    const char = reference[i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return reference.slice(0, i);
      }
    }
  }

  return reference;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// ! 2 Solution  Right solution

// const longestCommonPrefix = function (strs) {
//   let output = "";

//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs.every((str) => str[i] === strs[0][i])) {
//       output += strs[0][i];
//     } else break;
//   }

//   return output.length === 0 ? "" : output;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// ! 1 Solution  Right solution
/**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) {
//     return ""; // If the input array is empty, there is no common prefix.
//   }
//   // Sort the array to have the shortest string as the first element and the longest as the last.
//   strs.sort((a, b) => a.length - b.length);
//   console.log(strs);

//   // Take the first string as a reference.
//   const reference = strs[0];
//   // Iterate through the characters of the reference string.
//   for (let i = 0; i < reference.length; i++) {
//     const char = reference[i];

//     // Check if the current character matches the character in the same position of all other strings.
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== char) {
//         return reference.slice(0, i); // Return the common prefix found so far.
//       }
//     }
//   }

//   return reference; // If we reach here, the reference string is the common prefix.
// };

// ! Training

const arr = ["hello", "what", "why"];
arr.sort((a, b) => a.length - b.length);
const arrRef = arr[0];
for (let i = 0; i < arrRef.length; i++) {
  console.log(i);
  console.log("-----------------");
  for (let j = 1; j < arr.length; j++) {
    console.log(j);
  }
}
