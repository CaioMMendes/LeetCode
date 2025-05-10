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
var sumOfLeftLeaves = function (root: any) {
  let sum = 0

  function searchTree(node: any, isLeft: boolean) {
    if (!node.left && !node.right) {
      if (isLeft) {
        sum += node.val
      }
      return
    }

    if (node.left) {
      searchTree(node.left, true)
    }

    if (node.right) {
      searchTree(node.right, false)
    }
  }

  searchTree(root, false)

  return sum
}
