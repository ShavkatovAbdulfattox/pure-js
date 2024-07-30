/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// ! Newest version( es6++, solution )

// const addTwoNumbers = function (l1, l2) {
//   let result;

//   const el1 = l1.reverse().join("");

//   const el2 = l2.reverse().join("");

//   result = +el1 + +el2;

//   return result.toString().split("").reverse();
// };

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// function reverseFn(arr) {
//   let result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }

//   return result;
// }

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToListNode(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return dummyHead.next;
}

console.log(arrayToListNode([3, 3, 5, 6, 2]));

// const addTwoNumbers = function (l1, l2) {
//   let result;
//   const el1 = reverseFn(l1).join("");
//   const el2 = reverseFn(l2).join("");

//   result = el1 + el2;
//   return reverseFn(result);
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
