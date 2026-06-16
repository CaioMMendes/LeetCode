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
var levelOrderBottom = function (root) {
  const deepMap = new Map()

  runTree(root, 0)

  const result = []

  for (const [key, val] of deepMap) {
    result.push(val)
  }

  return result.reverse()

  function runTree(node, deep) {
    if (!node) return

    if (deepMap.has(deep)) {
      deepMap.get(deep).push(node.val)
    } else {
      deepMap.set(deep, [node.val])
    }

    if (node.left) {
      runTree(node.left, deep + 1)
    }
    if (node.right) {
      runTree(node.right, deep + 1)
    }
  }
}
