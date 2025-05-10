//@ts-nocheck

const root = [3, 1, 4, null, 2],
  k = 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0
  let result = 0
  runTree(root)

  return result
  function runTree(node) {
    if (result) return

    if (!node) {
      return
    }

    if (node.left) {
      runTree(node.left)
    }

    count++
    if (count === k) {
      result = node.val
      return
    }

    if (node.right) {
      runTree(node.right)
    }
  }
}

console.log(kthSmallest(root, k))
