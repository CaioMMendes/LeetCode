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
 */
var FindElements = function (root) {
  this.elements = new Set()

  const runTree = (node, val) => {
    if (!node) return

    this.elements.add(val)

    if (node.left) {
      runTree(node.left, 2 * val + 1)
    }

    if (node.right) {
      runTree(node.right, 2 * val + 2)
    }
  }

  runTree(root, 0)
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.elements.has(target)
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
