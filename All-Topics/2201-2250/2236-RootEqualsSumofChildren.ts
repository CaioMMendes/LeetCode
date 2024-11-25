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
interface TreeNode {
  val: number
  left: {
    val: number
  }
  right: {
    val: number
  }
}
var checkTree = function (root: TreeNode) {
  return root.val === root.left.val + root.right.val
}
