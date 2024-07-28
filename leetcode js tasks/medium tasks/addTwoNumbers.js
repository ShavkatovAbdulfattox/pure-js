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

const addTwoNumbers = function (l1, l2) {
  let result;
  const el1 = l1.reverse().join("");
  const el2 = l2.reverse().join("");

  result = +el1 + +el2;

  return result.toString().split("").reverse();
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
