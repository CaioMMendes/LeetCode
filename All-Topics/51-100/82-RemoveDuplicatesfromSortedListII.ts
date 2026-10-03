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
var deleteDuplicates = function (head) {
  let currentNode = head
  let count = {}

  while (currentNode) {
    if (count[currentNode.val]) {
      count[currentNode.val]++
    } else {
      count[currentNode.val] = 1
    }
    currentNode = currentNode.next
  }

  const numsToAdd = []

  for (const key in count) {
    if (count[key] === 1) {
      numsToAdd.push(Number(key))
    }
  }

  numsToAdd.sort((a, b) => a - b)

  if (numsToAdd.length === 0) return null

  head = new ListNode(numsToAdd[0])
  let tempNode = head
  for (let i = 1; i < numsToAdd.length; i++) {
    tempNode.next = new ListNode(numsToAdd[i])
    tempNode = tempNode.next
  }

  return head
}
