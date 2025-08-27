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
var averageOfSubtree = function (root) {
  let result = 0

  runTree(root)

  return result

  function runTree(node) {
    if (!node) return [0, 0]

    let sumLeft = 0
    let sumRight = 0
    let countLeft = 0
    let countRight = 0

    if (node?.left !== null) {
      const response = runTree(node.left)
      sumLeft += response[0]
      countLeft += response[1]
    }

    if (node?.right !== null) {
      const response = runTree(node.right)
      sumRight += response[0]
      countRight += response[1]
    }

    const totalSum = sumLeft + sumRight + node.val
    const totalCount = countLeft + countRight + 1

    if (Math.floor(totalSum / totalCount) === node.val) {
      result++
    }

    return [totalSum, totalCount]
  }
}

console.log()
