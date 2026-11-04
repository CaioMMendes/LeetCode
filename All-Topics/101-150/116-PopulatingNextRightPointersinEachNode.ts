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
  const nodes = []
  const countDeep = {}

  runTree(root, 0, false)

  runTree(root, 0, true)

  return root

  function runTree(node, deep, pop) {
    if (!node) return

    if (!pop) {
      if (nodes[deep]) {
        nodes[deep].push(node)
      } else {
        nodes[deep] = [node]
      }
    } else {
      node.next = nodes?.[deep]?.[(countDeep[deep] ?? 0) + 1] ?? null
      if (countDeep[deep]) {
        countDeep[deep]++
      } else {
        countDeep[deep] = 1
      }
    }

    if (node.left) {
      runTree(node.left, deep + 1, pop)
    }

    if (node.right) {
      runTree(node.right, deep + 1, pop)
    }
  }
}
