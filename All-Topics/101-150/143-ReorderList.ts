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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return

  let reverse = null
  let currentNode = head
  let count = 0

  let initialList = null
  let currentInitialList = null

  while (currentNode) {
    const temp = reverse
    reverse = new ListNode(currentNode.val)
    reverse.next = temp

    const node = new ListNode(currentNode.val)
    if (!initialList) {
      initialList = node
      currentInitialList = node
    } else {
      currentInitialList.next = node
      currentInitialList = node
    }

    currentNode = currentNode.next
    count++
  }

  currentNode = head
  const half = Math.ceil(count / 2)

  for (let i = 0; i < half; i++) {
    currentNode.val = initialList.val
    initialList = initialList.next
    currentNode = currentNode.next

    if (currentNode && !(count % 2 !== 0 && i === half - 1)) {
      currentNode.val = reverse.val
      reverse = reverse.next
      currentNode = currentNode.next
    }
  }
}
