const root = [1, null, 2, 2]

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
var findMode = function (root: any) {
  const count: Record<string, number> = {}

  function searchTree(node: any) {
    if (!node.left && !node.right) {
      if (count[node.val]) {
        count[node.val]++
      } else {
        count[node.val] = 1
      }
      return
    }

    if (node.left) {
      searchTree(node.left)
    }
    if (node.right) {
      searchTree(node.right)
    }

    if (count[node.val]) {
      count[node.val]++
    } else {
      count[node.val] = 1
    }
  }

  let result: number[] = []

  searchTree(root)
  for (let key in count) {
    if (count[key] === count[result[0]]) {
      result.push(Number(key))
    } else if (count[key] > (count[result[0]] ?? 0)) {
      result = [Number(key)]
    }
  }
  return result
}

console.log(findMode(root))
