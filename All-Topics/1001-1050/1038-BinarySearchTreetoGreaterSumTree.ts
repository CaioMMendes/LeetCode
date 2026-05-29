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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let current = 0

  runTree(root)

  return root

  function runTree(node) {
    if (node.right) {
      runTree(node.right)
    }
    current += node.val
    node.val = current

    if (node.left) {
      runTree(node.left)
    }
  }
}
