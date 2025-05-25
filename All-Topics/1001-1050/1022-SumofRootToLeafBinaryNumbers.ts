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
var sumRootToLeaf = function (root) {
  const numbers = []

  runTree(root, "")

  return numbers.reduce((acc, cur) => acc + parseInt(cur, 2), 0)

  function runTree(node, number) {
    if (node.left === null && node.right === null) {
      return numbers.push(number + String(node.val))
    }

    if (node.left) {
      runTree(node.left, number + String(node.val))
    }

    if (node.right) {
      runTree(node.right, number + String(node.val))
    }
  }
}
