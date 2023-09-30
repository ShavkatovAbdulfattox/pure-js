/**
 * @param {Function} fn
 * @return {Function}
 */

const once = (fn) => {
  let hasBeenCalled = false;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 5));

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// const once = function (fn) {
//   let hasBeenCalled = false;
//   let result;
//   return function (...args) {
//     if (!hasBeenCalled) {
//       result = fn(...args);
//       hasBeenCalled = false;
//       return result;
//     } else {
//       return undefined;
//     }
//   };
// };
