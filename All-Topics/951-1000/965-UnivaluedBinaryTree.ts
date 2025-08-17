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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let result = true
  const test = root?.val
  runTree(root)
  function runTree(node) {
    if (!node) return

    if (node.val !== test) {
      result = false
      return
    }

    if (node.left) {
      runTree(node.left)
    }
    if (node.right) {
      runTree(node.right)
    }
  }
  return result
}
