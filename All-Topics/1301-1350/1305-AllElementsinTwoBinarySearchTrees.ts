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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const result = []

  runTree(root1)
  runTree(root2)

  return result.sort((a, b) => a - b)

  function runTree(node) {
    if (node?.val === undefined || node?.val === null) return

    result.push(node.val)
    if (node.left) runTree(node.left)

    if (node.right) runTree(node.right)
  }
}
