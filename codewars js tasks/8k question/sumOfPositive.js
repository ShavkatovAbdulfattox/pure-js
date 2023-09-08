function sumTwoSmallestNumbers(numbers) {
  let count = 0;
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .forEach((n) => {
      count += n;
    });
  return count;
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
