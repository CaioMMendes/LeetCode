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
var minDiffInBST = function (root) {
  const set = new Set()
  runTree(root)
  let min = +Infinity

  const sorted = [...set].sort((a, b) => a - b)
  for (let i = 1; i < sorted.length; i++) {
    const diff = Math.abs(sorted[i] - sorted[i - 1])
    if (diff < min) min = diff
  }

  return min
  function runTree(node) {
    if (!node) return
    set.add(node.val)

    if (node.left) {
      runTree(node.left)
    }
    if (node.right) {
      runTree(node.right)
    }
  }
}
