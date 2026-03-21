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
var sumEvenGrandparent = function (root) {
  let result = 0

  runTree(root)

  return result

  function runTree(node) {
    if (!node) return

    if (node.val % 2 === 0) {
      if (node.left) {
        result += node?.left?.left?.val ?? 0
        result += node?.left?.right?.val ?? 0
      }
      if (node.right) {
        result += node?.right?.left?.val ?? 0
        result += node?.right?.right?.val ?? 0
      }
    }

    if (node.left) {
      runTree(node.left)
    }

    if (node.right) {
      runTree(node.right)
    }
  }
}
