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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let currentNode = head

  let count = 1
  const nodes = []

  while (right >= count) {
    if (count >= left) {
      nodes.push(currentNode.val)
    }
    count++
    currentNode = currentNode.next
  }
  nodes.reverse()

  currentNode = head
  count = 1
  let nodeIndex = 0
  while (right >= count) {
    if (count >= left) {
      currentNode.val = nodes[nodeIndex]
      nodeIndex++
    }
    count++
    currentNode = currentNode.next
  }

  return head
}
