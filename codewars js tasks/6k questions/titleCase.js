// function titleCase(title, minorWords) {
//   if (!title) {
//     return "";
//   }

//   const titleSplit = title.split(" ");
//   if (minorWords && Array.isArray(minorWords)) {
//     minorWords = minorWords.map((word) => word.toLowerCase());
//   }

//   const transformedWords = titleSplit.map((word) => {
//     if (word === word.toUpperCase()) {
//       const wordTitle =
//         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       return wordTitle;
//     } else {
//       return word.toLowerCase();
//     }
//   });
//   const checkMinorWords = transformedWords
//     .map((words, i) => {
//       return minorWords && minorWords.includes(words)
//         ? words.toLowerCase()
//         : words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
//     })
//     .join(" ");

//   const result = checkMinorWords.split(" ");
//   result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);

//   return result.join(" ");
// }

function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }

  const titleSplit = title.split(" ");
  if (minorWords && typeof minorWords === "string") {
    minorWords = minorWords.split(" ").map((word) => word.toLowerCase());
  }

  const transformedWords = titleSplit.map((word, i) => {
    if (i === 0) {
      // Always capitalize the first word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return minorWords && minorWords.includes(word.toLowerCase())
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  return transformedWords.join(" ");
}

console.log(titleCase("a bc", "BC"));

console.log(titleCase("ab", ["ab"]));

console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));

console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
