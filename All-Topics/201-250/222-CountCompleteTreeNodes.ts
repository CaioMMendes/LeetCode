// @ts-nocheck

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
 * @return {number}
 */
var countNodes = function (root) {
  let result = 0

  runTree(root)
  if (!root) return 0
  result++

  function runTree(node) {
    if (node?.right) {
      result += 2
      runTree(node.left)
      runTree(node.right)
    } else if (node?.left) {
      result += 1
      runTree(node.left)
    }
    return
  }

  return result
}
