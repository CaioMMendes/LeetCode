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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const list = []

  let currentNode = head
  let currentIndex = 0

  while (currentNode) {
    list.push(currentNode.val)
    currentNode = currentNode.next
  }

  const endIndex = list.length - k

  currentNode = head

  while (currentIndex < list.length) {
    if (currentIndex === k - 1) {
      currentNode.val = list[endIndex]
    }

    if (currentIndex === endIndex) {
      currentNode.val = list[k - 1]
    }

    currentIndex++

    currentNode = currentNode.next
  }

  return head
}
