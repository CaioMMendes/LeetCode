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
var findTilt = function (root) {
  let result = 0

  runTree(root)

  return result

  function runTree(node) {
    if (node?.left === null && node?.right === null) return node.val

    let left
    let right

    if (node?.left !== undefined && node.left !== null) {
      left = runTree(node.left) ?? 0
    }

    if (node?.right !== undefined && node.right !== null) {
      right = runTree(node.right) ?? 0
    }

    const calc = Math.abs((left ?? 0) - (right ?? 0))
    result += calc
    return (left ?? 0) + (right ?? 0) + node?.val ?? 0
  }
}
