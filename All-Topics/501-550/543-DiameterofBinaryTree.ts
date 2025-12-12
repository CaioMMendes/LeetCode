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
var diameterOfBinaryTree = function (root) {
  let result = 1

  runTree(root)

  function runTree(node) {
    let diameter = 1

    if (node.left) {
      diameter += lengthTree(node.left, 0)
    }
    if (node.right) {
      diameter += lengthTree(node.right, 0)
    }

    result = Math.max(diameter, result)

    if (node.left) {
      runTree(node.left)
    }
    if (node.right) {
      runTree(node.right)
    }
  }

  function lengthTree(node, length) {
    let left = length + 1
    let right = length + 1
    if (node.left) {
      left = lengthTree(node.left, length + 1)
    }
    if (node.right) {
      right = lengthTree(node.right, length + 1)
    }

    return Math.max(left, right)
  }

  return result - 1
}
