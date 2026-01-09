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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const resultTree = new TreeNode()

  if (!root1 && !root2) return null

  runTree(root1, root2, resultTree)

  return resultTree

  function runTree(node1, node2, currentNode) {
    if (!node1 && !node2) return

    const sum = (node1?.val ?? 0) + (node2?.val ?? 0)

    if (sum !== 0 || node1?.val !== undefined || node2?.val !== undefined) {
      currentNode.val = sum
    }

    if (
      (node1?.left !== null && node1?.left !== undefined) ||
      (node2?.left !== null && node2?.left !== undefined)
    ) {
      currentNode.left = new TreeNode()
      runTree(node1?.left, node2?.left, currentNode.left)
    }

    if (
      (node1?.right !== null && node1?.right !== undefined) ||
      (node2?.right !== null && node2?.right !== undefined)
    ) {
      currentNode.right = new TreeNode()
      runTree(node1?.right, node2?.right, currentNode.right)
    }
  }
}
