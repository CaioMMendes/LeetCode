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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const elements = []

  runRoot(root)

  elements.sort((a, b) => a - b)

  return makeTree(elements)

  function makeTree(arr) {
    if (arr.length === 0) return
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle + 1, arr.length)

    const node = new TreeNode(arr[middle], null, null)

    if (left.length > 0) {
      node.left = makeTree(left)
    }

    if (right.length > 0) {
      node.right = makeTree(right)
    }

    return node
  }

  function runRoot(node) {
    if (!node) return

    elements.push(node.val)

    if (node.left) {
      runRoot(node.left)
    }
    if (node.right) {
      runRoot(node.right)
    }
  }
}
