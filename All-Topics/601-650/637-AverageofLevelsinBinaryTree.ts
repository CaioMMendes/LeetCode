const root = [3, 9, 20, null, null, 15, 7]

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
var averageOfLevels = function (root: any) {
  const sum: Record<string, number> = {}
  const count: Record<string, number> = {}

  const result = []

  searchTree(root, 1)

  const values = Object.values(sum)
  const counts = Object.values(count)

  for (let i = 0; i < values.length; i++) {
    result.push(Number(values[i]) / Number(counts[i]))
  }

  function searchTree(node: any, level: number) {
    if (node?.val !== undefined) {
      if (sum[level] !== undefined) {
        sum[level] += node.val
        count[level]++
      } else {
        sum[level] = node.val
        count[level] = 1
      }
    }

    if (node?.left === null && node?.right === null) {
      return
    }

    if (node?.left) {
      searchTree(node.left, level + 1)
    }
    if (node?.right) {
      searchTree(node.right, level + 1)
    }
  }

  return result
}

console.log(averageOfLevels(root))
