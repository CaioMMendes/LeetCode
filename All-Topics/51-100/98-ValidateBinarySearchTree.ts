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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let result = true

  runTree(root, [], null)

  function runTree(node, directions, deep) {
    if (!node) return

    if (deep !== null) {
      if (!checkTree(directions, deep, node.val)) {
        result = false
        return
      }
    }

    if (node.left) {
      runTree(node.left, [...directions, "l"], deep + 1)
    }
    if (node.right) {
      runTree(node.right, [...directions, "r"], deep + 1)
    }
  }

  function checkTree(directions, deep, val) {
    let count = 0
    let currentNode = root
    while (count < deep) {
      if (currentNode.val === val) return false
      if (directions[count] === "l") {
        if (currentNode.val < val) return false
        currentNode = currentNode.left
      } else {
        if (currentNode.val > val) return false
        currentNode = currentNode.right
      }

      count++
    }
    return true
  }

  return result
}
