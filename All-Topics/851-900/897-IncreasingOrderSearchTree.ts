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
var increasingBST = function (root) {
  let newTree

  let currentNewTree
  runTree(root)

  return newTree

  function runTree(node) {
    if (node === null) return

    if (node.left) {
      runTree(node.left)
    }

    if (newTree === undefined) {
      newTree = new TreeNode(node.val, null, null)
      currentNewTree = newTree
    } else {
      const newNode = new TreeNode(node.val, null, null)
      currentNewTree.right = newNode
      currentNewTree = currentNewTree.right
    }

    if (node.right) {
      runTree(node.right)
    }
  }
}
