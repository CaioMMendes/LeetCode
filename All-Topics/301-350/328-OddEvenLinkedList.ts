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
var oddEvenList = function (head) {
  let oddList = null
  let evenList = null
  let currentOddList = oddList
  let currentEvenList = evenList
  let index = 1

  while (head !== null) {
    if (index % 2 === 0) {
      if (evenList === null) {
        evenList = new ListNode(head.val, null)
        currentEvenList = evenList
      } else {
        const newNode = new ListNode(head.val, null)
        currentEvenList.next = newNode
        currentEvenList = currentEvenList.next
      }
    } else {
      if (oddList === null) {
        oddList = new ListNode(head.val, null)
        currentOddList = oddList
      } else {
        const newNode = new ListNode(head.val, null)
        currentOddList.next = newNode
        currentOddList = currentOddList.next
      }
    }
    index++
    head = head.next
  }

  if (oddList) {
    currentOddList.next = evenList
  } else {
    return evenList
  }
  return oddList
}
