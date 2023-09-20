/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(3));
/**
 * argumentsLength(1, 2, 3); // 3
 */
