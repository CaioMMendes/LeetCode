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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = []
  if (root === null) return result
  searchTree(root)
  return result
  function searchTree(node) {
    result.push(node.val)
    if (node.left === null && node.right === null) {
      return
    }

    if (node.left) {
      searchTree(node.left)
    }
    if (node.right) {
      searchTree(node.right)
    }
  }
}
