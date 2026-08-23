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
var removeNodes = function (head) {
  const arr = []

  let currentNode = head

  while (currentNode) {
    arr.push(currentNode.val)
    currentNode = currentNode.next
  }

  let max = []
  let currentMax = arr[arr.length - 1]

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currentMax) {
      currentMax = arr[i]
    }
    max.push(currentMax)
  }

  max = max.reverse()

  if (!head) return null

  const modifyedList = new ListNode(head.val)

  currentNode = head

  let currentModifyed = modifyedList

  for (const val of max) {
    if (currentNode.val >= val) {
      currentModifyed.val = val
      if (currentNode.next) {
        currentModifyed.next = new ListNode(null)
        currentModifyed = currentModifyed.next
      }
    }
    currentNode = currentNode.next
  }

  return modifyedList
}
