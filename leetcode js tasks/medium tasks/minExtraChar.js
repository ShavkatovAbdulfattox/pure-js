// /**
//  * @param {string} s
//  * @param {string[]} dictionary
//  * @return {number}
//  */
// var minExtraChar = function (s, dictionary) {
//   let result,
//     unused = 0;

//   for (const char of s) {

//     // dictionary.forEach((el) => {

//     // });
//     console.log(char);
//   }

//   return result;
// };

// console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"]));

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = Array(n + 1).fill(false); // DP array initialized to false
  dp[0] = true; // Base case: empty string can be segmented

  // Convert wordDict to a Set for O(1) lookup
  const wordSet = new Set(wordDict);

  // Traverse through all possible substrings
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const substring = s.slice(j, i);
      // Check if substring is a valid word and if we can segment up to j
      if (dp[j] && wordSet.has(substring)) {
        dp[i] = true;
        break; // No need to check further once we find a valid segmentation
      }
    }
  }

  return dp[n]; // Result is whether we can segment the entire string
};

// Example usage
console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
