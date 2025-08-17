// @ts-nocheck

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let testing = true

  let result = false
  function checkTree(node, subNode) {
    if (node.val !== subNode.val) testing = false
    if ((node?.left && !subNode?.left) || (!node?.left && subNode?.left))
      testing = false
    if ((node?.right && !subNode?.right) || (!node?.right && subNode?.right))
      testing = false
    if (node?.left && subNode?.left) {
      checkTree(node.left, subNode.left)
    }
    if (node?.right && subNode?.right) {
      checkTree(node.right, subNode.right)
    }
  }

  function searchTree(node) {
    if (node?.val === subRoot?.val) {
      testing = true
      const newNode = node
      const newSubRoot = subRoot
      checkTree(newNode, newSubRoot)
      if (testing) result = true
    }
    if (node?.left) {
      searchTree(node.left)
    }
    if (node?.right) {
      searchTree(node.right)
    }
    return
  }
  searchTree(root)
  return result
}
