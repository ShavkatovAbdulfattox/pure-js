/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  // Initialize the first two steps
  let prev1 = 2; // f(2)
  let prev2 = 1; // f(1)
  let current = 0;

  // Calculate each subsequent step using the formula f(n) = f(n-1) + f(n-2)
  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2; // Calculate the number of ways to reach step i
    prev2 = prev1; // Move prev2 to prev1 (f(n-2) -> f(n-1))
    prev1 = current; // Move current to prev1 (f(n-1) -> f(n))
  }

  return current;
};

console.log(climbStairs(8));
