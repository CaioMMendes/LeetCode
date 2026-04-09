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
var findBottomLeftValue = function (root) {
  let result = [0, -1]

  runTree(root, 0)

  return result[0]

  function runTree(node, deep) {
    if (!node) return

    if (deep > result[1]) {
      result = [node.val, deep]
    }

    if (node.left) {
      runTree(node.left, deep + 1)
    }
    if (node.right) {
      runTree(node.right, deep + 1)
    }
  }
}
