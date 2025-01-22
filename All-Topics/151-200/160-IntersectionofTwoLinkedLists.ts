//@ts-nocheck

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA !== null) {
    let currentHeadB = headB
    while (currentHeadB !== null) {
      if (headA === currentHeadB) {
        return headA
      }
      currentHeadB = currentHeadB.next
    }

    headA = headA.next
  }
  return null
}
