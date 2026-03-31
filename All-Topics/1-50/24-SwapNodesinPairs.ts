//@ts-nocheck

const head = [1, 2, 3, 4]

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
var swapPairs = function (head) {
  let dummy = new ListNode(0, head)
  let currentNode = dummy

  while (currentNode.next && currentNode.next.next) {
    const first = currentNode.next
    const second = first.next

    first.next = second.next
    second.next = first
    currentNode.next = second

    currentNode = first
  }

  return dummy.next
}

console.log(swapPairs(head))
