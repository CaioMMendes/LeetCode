//@ts-nocheck

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null

  runTree(root)

  function runTree(node) {
    if (!node) return

    let leftValues = []
    let rightValues = []

    if (node.left) {
      leftValues = runTree(node.left)
    }

    if (node.right) {
      rightValues = runTree(node.right)
    }

    const values = leftValues.concat(rightValues).concat([node.val])

    const check = checkHasBothValues(values, p.val, q.val)

    if (result === null && check) {
      result = node
    }

    return values
  }

  return result

  function checkHasBothValues(arr, a, b) {
    let findedA = false
    let findedB = false
    for (const val of arr) {
      if (val === a) {
        findedA = true
      }

      if (val === b) {
        findedB = true
      }
      if (findedA && findedB) return true
    }

    return false
  }
}
