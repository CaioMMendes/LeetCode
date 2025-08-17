const root = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]

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
var deepestLeavesSum = function (root: any) {
  let sum = 0
  let deepest = 0

  runTree(root, 0)

  function runTree(node: any, curDeep: any) {
    if (!node) return
    if (curDeep > deepest) {
      sum = 0
      deepest = curDeep
    }
    if (curDeep === deepest) {
      sum += node.val
    }
    if (node.left) {
      runTree(node.left, curDeep + 1)
    }
    if (node.right) {
      runTree(node.right, curDeep + 1)
    }
  }

  return sum
}

console.log(deepestLeavesSum(root))
