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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = []

  searchTree(root)

  function searchTree(node) {
    if (node?.left) {
      searchTree(node.left)
    }

    if (node?.right) {
      searchTree(node.right)
    }
    if (!node) return
    return result.push(node?.val)
  }
  return result
}
