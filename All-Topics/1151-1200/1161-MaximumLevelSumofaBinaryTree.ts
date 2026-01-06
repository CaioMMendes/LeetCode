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
var maxLevelSum = function (root) {
  const map = new Map()

  runTree(root, 1)

  let max = [-Infinity, 1]

  for (const [key, val] of map) {
    if (val > max[0]) {
      max = [val, key]
    } else if (val === max[0] && key < max[1]) {
      max = [val, key]
    }
  }

  return max[1]

  function runTree(node, deep) {
    if (map.has(deep)) {
      map.set(deep, map.get(deep) + node.val)
    } else {
      map.set(deep, node.val)
    }

    if (node.left) {
      runTree(node.left, deep + 1)
    }

    if (node.right) {
      runTree(node.right, deep + 1)
    }
  }
}
