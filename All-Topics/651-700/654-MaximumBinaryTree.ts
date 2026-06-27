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
var constructMaximumBinaryTree = function (nums) {
  const largeIndex = getLargeIndex(nums)

  if (nums.length === 0) return null

  const root = new TreeNode(nums[largeIndex], null, null)

  makeTree(root, nums)

  return root

  function makeTree(node, arr) {
    const index = getLargeIndex(arr)
    const left = arr.slice(0, index)
    const right = arr.slice(index + 1)

    if (arr.length !== nums.length) {
      node.val = arr[index]
    }

    if (left.length > 0) {
      node.left = new TreeNode(null, null, null)
      makeTree(node.left, left)
    }
    if (right.length > 0) {
      node.right = new TreeNode(null, null, null)
      makeTree(node.right, right)
    }
  }

  function getLargeIndex(arr) {
    let max = -1
    let index = -1

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
        index = i
      }
    }
    return index
  }
}
