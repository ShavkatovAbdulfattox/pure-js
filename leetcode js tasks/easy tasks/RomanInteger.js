/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_TO_INTEGERS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let count = 0;

  let romanStrings = s;
  romanStrings = romanStrings.replace("IV", "IIII");
  romanStrings = romanStrings.replace("IX", "VIIII");
  romanStrings = romanStrings.replace("XL", "XXXX");
  romanStrings = romanStrings.replace("XC", "LXXXX");
  romanStrings = romanStrings.replace("CD", "CCCC");
  romanStrings = romanStrings.replace("CM", "DCCCC");

  romanStrings.split("").forEach((str) => {
    if (ROMAN_TO_INTEGERS[str]) {
      count += ROMAN_TO_INTEGERS[str];
    }
  });

  return count;
};
console.log(romanToInt("III"));
