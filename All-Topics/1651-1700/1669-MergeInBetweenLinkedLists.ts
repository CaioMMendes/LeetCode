//@ts-nocheck

const list1 = [10, 1, 13, 6, 9, 5],
  a = 3,
  b = 3,
  list2 = [1000000, 1000001, 1000002]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let currentNode = list1
  const tempA = a

  while (a > 1) {
    currentNode = currentNode.next
    a--
  }
  let temp = currentNode.next

  currentNode.next = list2

  let dif = b - tempA

  while (dif >= 0) {
    temp = temp.next
    dif--
  }

  while (currentNode?.next) {
    currentNode = currentNode.next
  }

  currentNode.next = temp

  return list1
}

console.log(mergeInBetween(list1, a, b, list2))
