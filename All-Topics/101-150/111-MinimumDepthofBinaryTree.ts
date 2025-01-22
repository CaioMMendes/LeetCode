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
var minDepth = function (root) {
  let min = Infinity

  if (!root) return 0
  searchTree(root, 1)
  function searchTree(node, deep) {
    if (node.left === null && node.right === null) {
      if (min > deep) {
        min = deep
      }
      return
    }
    if (node.left) searchTree(node.left, deep + 1)
    if (node.right) searchTree(node.right, deep + 1)
  }
  return min
}
