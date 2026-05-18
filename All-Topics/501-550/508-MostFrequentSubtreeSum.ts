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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  let result = new Map()

  getResults(root)

  let max = -1
  let response = []

  for (const [key, val] of result) {
    if (max < val) {
      max = val
      response = [key]
    } else if (max === val) {
      response.push(key)
    }
  }

  return response

  function getResults(node) {
    if (!node) return

    const sum = runTree(node, 0)
    if (result.get(sum)) {
      result.set(sum, result.get(sum) + 1)
    } else {
      result.set(sum, 1)
    }

    if (node.left) {
      getResults(node.left)
    }

    if (node.right) {
      getResults(node.right)
    }
  }

  function runTree(node) {
    if (node?.left === null && node?.right === null) {
      return node.val
    }

    let sum = 0

    if (node.left) {
      const left = runTree(node.left)
      sum += left
    }

    if (node.right) {
      const right = runTree(node.right)
      sum += right
    }

    return sum + node.val
  }
}
