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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const nodes = []

  runTree(root)

  if (nodes.legnth === 0) return
  let currentNode = root

  for (let i = 1; i < nodes.length; i++) {
    currentNode.left = null
    currentNode.right = new TreeNode(nodes[i], null, null)
    currentNode = currentNode.right
  }

  return root

  function runTree(node) {
    if (!node) return

    nodes.push(node.val)

    if (node.left) {
      runTree(node.left)
    }
    if (node.right) {
      runTree(node.right)
    }
  }
}
