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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []

  runTree(root, 0)

  return result

  function runTree(node, deep) {
    if (!node) return

    if (result?.[deep] === undefined) {
      result[deep] = [node.val]
    } else {
      result[deep] = [...result[deep], node.val]
    }

    if (node.left) {
      runTree(node.left, deep + 1)
    }
    if (node.right) {
      runTree(node.right, deep + 1)
    }
  }
}
