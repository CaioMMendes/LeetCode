// @ts-nocheck

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head
  let numberOfNodes = 0
  let count = 0
  countNodes(head)
  let target
  function runList(node) {
    if (numberOfNodes - count !== n) {
      count++
      runList(node.next)
    } else {
      target = node
    }
  }
  runList(current)
  if (current === target) return head.next

  while (true) {
    if (current?.next === target) {
      current.next = current?.next?.next ?? null
      break
    } else {
      current = current?.next
    }
  }

  return head

  function countNodes(node) {
    if (node) {
      numberOfNodes++
      countNodes(node.next)
    }
  }
}
