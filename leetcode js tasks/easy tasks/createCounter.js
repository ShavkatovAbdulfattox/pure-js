/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
  // Creating variable
  let currentCount = init;
  // return an object
  return {
    // increment
    increment: () => (currentCount += 1),
    // decrement
    decrement: () => (currentCount -= 1),
    // reset
    reset: () => (currentCount = init),
  };
};

const counter = createCounter(5);
console.log(
  counter.increment(), // 6
  counter.reset(), // 5
  counter.decrement()
); // 4;
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
