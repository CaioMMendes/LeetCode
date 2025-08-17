const root = [1, 2, 2, 3, 4, 4, 3]

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
var isSymmetric = function (root: any) {
  return left(root.left, root.right)

  function left(nodeLeft: any, nodeRight: any): boolean {
    if (nodeLeft === null && nodeRight === null) return true
    if (
      (nodeLeft === null && nodeRight !== null) ||
      (nodeRight === null && nodeLeft !== null)
    )
      return false
    if (nodeLeft.val !== nodeRight.val) return false
    return (
      left(nodeRight.left, nodeLeft.right) &&
      left(nodeRight.right, nodeLeft.left)
    )
  }
}

console.log(isSymmetric(root))
