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
 * @return {number}
 */
var pairSum = function (head) {
  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let max = 0
  const half = arr.length / 2
  for (let i = 0; i < half; i++) {
    const sum = arr[i] + arr[arr.length - 1 - i]
    if (sum > max) {
      max = sum
    }
  }

  return max
}
