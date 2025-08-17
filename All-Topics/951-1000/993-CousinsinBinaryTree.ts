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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let deepX = null
  let deepY = null
  let fatherX = null
  let fatherY = null

  runTree(root, 0)

  function runTree(node, deep) {
    if (node?.left === undefined && node?.right === undefined) return

    if (node?.left?.val === x) {
      fatherX = node.val
      deepX = deep
    }
    if (node?.left?.val === y) {
      fatherY = node.val
      deepY = deep
    }
    if (node?.right?.val === y) {
      fatherY = node.val
      deepY = deep
    }
    if (node?.right?.val === x) {
      fatherX = node.val
      deepX = deep
    }

    if (node.left) runTree(node.left, deep + 1)
    if (node.right) runTree(node.right, deep + 1)
  }

  return deepX === deepY && fatherX !== fatherY
}
