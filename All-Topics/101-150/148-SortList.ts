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
var sortList = function (head) {
  const array = []

  let current = head
  if (head === null) return head

  while (current !== null) {
    array.push(current.val)
    current = current.next
  }

  array.sort((a, b) => a - b)
  let result = new ListNode(array[0], null)
  let currentResult = result

  for (let i = 1; i < array.length; i++) {
    const newNode = new ListNode(array[i], null)
    currentResult.next = newNode
    currentResult = currentResult.next
  }

  return result
}
