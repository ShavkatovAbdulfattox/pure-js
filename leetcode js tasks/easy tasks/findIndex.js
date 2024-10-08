/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0; // If needle is empty, return 0
  //   for (let i = 0; i < haystack.length; i++) {
  //     const letter = haystack[i];

  //     if (letter === needle[0] && haystack[i + 1] === needle[1]) {
  //       if (!haystack.slice(i).length >= needle.length) return;

  //       let word = haystack.slice(i, i + needle.length);

  //       if (word === needle) {
  //         return i;
  //       } else {
  //         return -1;
  //       }
  //     } else {
  //       return -1;
  //     }
  //   }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const letter = haystack[i];

    // Check if the first character matches
    if (letter === needle[0]) {
      // Check the full substring from current position
      let word = haystack.slice(i, i + needle.length);

      if (word === needle) {
        return i; // Return the index if found
      }
    }
  }

  return -1;
};

// console.log("hellothe".slice(4));

var strStr = function (haystack, needle) {
  const needleLength = needle.length; // = 2
  for (let i = 0; i < haystack.length; i++) {
    console.log(i, i + needleLength);
    console.log(haystack.slice(i, i + needleLength));

    if (haystack.substring(i, i + needleLength) === needle) return i;
  }
  return -1;
};

console.log(strStr("hello", "ll"));
