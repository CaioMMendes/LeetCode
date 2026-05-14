//@ts-nocheck

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null

  let left = new ListNode(-200)
  let right = new ListNode(-200)

  let currentNode = head
  let currentLeft = left
  let currentRight = right

  while (currentNode) {
    if (currentNode.val < x) {
      if (currentLeft.val === -200) {
        currentLeft.val = currentNode.val
      } else {
        currentLeft.next = new ListNode(currentNode.val)
        currentLeft = currentLeft.next
      }
    } else {
      if (currentRight.val === -200) {
        currentRight.val = currentNode.val
      } else {
        currentRight.next = new ListNode(currentNode.val)
        currentRight = currentRight.next
      }
    }
    currentNode = currentNode.next
  }

  if (!left || left.val === -200) {
    return right
  }

  if (right.val !== -200) {
    currentLeft.next = right
  }

  return left
}
