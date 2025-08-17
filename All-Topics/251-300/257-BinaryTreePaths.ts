const root = [1, 2, 3, null, 5]

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
 * @return {string[]}
 */
var binaryTreePaths = function (root: any) {
  const result: string[] = []

  runTree(root, "")
  function runTree(node: any, current: string) {
    if (current.length > 0) {
      current += `->${node.val}`
    } else {
      current = `${node.val}`
    }

    if (!node.left && !node.right) {
      return result.push(current)
    }

    if (node.left) {
      runTree(node.left, current)
    }
    if (node.right) {
      runTree(node.right, current)
    }
  }
  return result
}

console.log(binaryTreePaths(root))
