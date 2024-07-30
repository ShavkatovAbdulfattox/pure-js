// Problem: Delivery Schedule Validation

// You are given a list of strings schedule where each string starts with either:

// P - representing a pick-up operation, or
// D - representing a delivery operation,
// followed by a unique order ID.
// Your task is to determine if the schedule is valid based on the following rules:

// An order can be picked up only once and delivered only once.
// An order must be picked up before it is delivered.
// An order must not be delivered if it has not been picked up.

// Return True if the schedule follows all the rules, otherwise return False.

// Example

// Input: ["P1", "D1", "P2", "D2", "P3", "D3"]
// Output: True
// Explanation: Each pick-up operation precedes its
// corresponding delivery operation.

// Input: ["P1", "P1", "D1", "D2"]
// Output: False
// Explanation: Order 1 is picked up more than once.

// Input: ["P1", "D1", "D2", "P2"]
// Output: False
// Explanation: Order 2 is delivered before it is picked up.

// Input: ["P132", "D132"]
// Output: True
// Explanation: Order 1 is picked up and then delivered correctly.

function isValidSchedule(schedule) {
  const pickedUp = new Set();
  const delivered = new Set();

  for (const operation of schedule) {
    let orderId = operation.slice(1); // Extract the order ID

    if (operation.startsWith("P")) {
      if (pickedUp.has(orderId)) {
        return false;
      }
      pickedUp.add(orderId);
      console.log("-------------------\n");
      console.log(orderId);
      console.log(operation);
    } else if (operation.startsWith("D")) {
      if (!pickedUp.has(orderId) && delivered.has(orderId)) {
        return false;
      }
      delivered.add(orderId);
    }
  }

  return true;
}

// Test cases
console.log(isValidSchedule(["P1", "D1", "P2", "D2", "P3", "D3"])); // Output: True
// console.log(isValidSchedule(["P1", "P1", "D1", "D2"])); // Output: False
// console.log(isValidSchedule(["P1", "D1", "D2", "P2"])); // Output: False
// console.log(isValidSchedule(["P132", "D132"])); // Output: True
