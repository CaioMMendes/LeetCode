//@ts-nocheck

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const arr = []

  let currentNode = head
  while (currentNode !== null) {
    arr.push(currentNode.val)
    currentNode = currentNode.next
  }

  return generateTree(arr)

  function generateTree(arr) {
    if (arr.length === 0) return null

    const half = Math.floor(arr.length / 2)
    const left = arr.slice(0, half)
    const right = arr.slice(half + 1, arr.length)

    const node = new TreeNode(arr[half])

    if (left.length > 0) {
      node.left = generateTree(left)
    }

    if (right.length > 0) {
      node.right = generateTree(right)
    }

    return node
  }
}
