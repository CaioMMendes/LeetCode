//@ts-nocheck

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const deepList = {}
  const count = {}

  runTree(root, 0, false)
  runTree(root, 0, true)

  return root

  function runTree(node, deep, populate) {
    if (!node) return
    if (populate === true) {
      const i = count[deep] ?? 0
      node.next = deepList[deep][i + 1] ?? null
      count[deep] = i + 1
    } else {
      if (deepList[deep]) {
        deepList[deep].push(node)
      } else {
        deepList[deep] = [node]
      }
    }

    if (node.left) {
      runTree(node.left, deep + 1, populate)
    }

    if (node.right) {
      runTree(node.right, deep + 1, populate)
    }
  }
}
