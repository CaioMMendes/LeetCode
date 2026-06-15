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
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let count = 0
  let currentNode = head

  while (currentNode) {
    count++
    currentNode = currentNode.next
  }

  if (count === 1) return null

  currentNode = head
  const mid = Math.floor(count / 2)

  count = 0

  while (count < mid) {
    if (count < mid - 1) {
      count++
      currentNode = currentNode.next
      continue
    }

    currentNode.next = currentNode.next?.next
    break
  }

  return head
}
