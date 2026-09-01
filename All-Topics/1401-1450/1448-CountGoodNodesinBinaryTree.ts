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
 * @return {number}
 */
var goodNodes = function (root) {
  let result = 0

  runTree(root, -Infinity)

  return result

  function runTree(node, max) {
    if (!node) return

    if (node.val >= max) {
      result++
      max = node.val
    }

    if (node.left) {
      runTree(node.left, max)
    }

    if (node.right) {
      runTree(node.right, max)
    }
  }
}
