/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const mergeTwoLists = function (list1, list2) {
  if (list1.length === 0 && list2.length === 0) return [];

  if (
    (list1.length === 1 && list2.length === 0) ||
    (list1.length === 0 && list2.length === 1)
  )
    return [...list1, ...list2];

  return (
    list1.length === 0 && list2.length === 0 && [...list1, ...list2].sort()
  );
};

console.log(
  mergeTwoLists([], []),
  mergeTwoLists([], [0]),
  mergeTwoLists([1, 2, 4], [1, 3, 4])
);
// console.log(mergeTwoLists([4], [7]));
