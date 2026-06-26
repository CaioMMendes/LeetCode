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
var reverseOddLevels = function (root) {
  const vals = {}
  const count = {}

  runTree(root, 0, false)

  runTree(root, 0, true)

  return root

  function runTree(node, deep, update) {
    if (!node) return

    if (deep % 2 !== 0 && !update) {
      if (vals[deep]) {
        vals[deep].push(node.val)
      } else {
        vals[deep] = [node.val]
      }
    }

    if (deep % 2 !== 0 && update) {
      node.val = vals[deep][vals[deep].length - 1 - (count?.[deep] ?? 0)]
      if (count[deep]) {
        count[deep]++
      } else {
        count[deep] = 1
      }
    }

    if (node.left) {
      runTree(node.left, deep + 1, update)
    }
    if (node.right) {
      runTree(node.right, deep + 1, update)
    }
  }
}
