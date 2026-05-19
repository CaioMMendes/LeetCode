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
var BSTIterator = function (root) {
  this.arr = []

  const arr = this.arr

  runTree(root)

  this.arr = this.arr.reverse()

  function runTree(node) {
    if (!node) return

    if (node.left) {
      runTree(node.left)
    }

    arr.push(node.val)

    if (node.right) {
      runTree(node.right)
    }
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr.pop()
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.arr.length > 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
