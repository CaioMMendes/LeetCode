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
var maxProduct = function (root) {
  const MOD = 1e9 + 7
  let max = 0

  function sumTree(node) {
    if (!node) return 0
    return node.val + sumTree(node.left) + sumTree(node.right)
  }

  const total = sumTree(root)

  function dfs(node) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    const subTreeSum = node.val + left + right

    max = Math.max(max, subTreeSum * (total - subTreeSum))

    return subTreeSum
  }

  dfs(root)

  return max % MOD
}
