//@ts-nocheck

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const root = new TreeNode()
  let currentNode = root

  makeTree(nums, currentNode)

  return root

  function makeTree(arr, node) {
    const half = Math.floor(arr.length / 2)

    const left = arr.slice(0, half)
    const right = arr.slice(half + 1, arr.length)

    node.val = arr[half]

    if (left.length > 0) {
      node.left = new TreeNode()
      makeTree(left, node.left)
    }
    if (right.length > 0) {
      node.right = new TreeNode()
      makeTree(right, node.right)
    }
  }
}

console.log(sortedArrayToBST(nums))
