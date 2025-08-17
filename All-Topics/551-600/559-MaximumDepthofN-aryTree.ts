//@ts-nocheck

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0

  runTree(root, 1)

  function runTree(node, deep) {
    if (!node) return
    if (deep > result) result = deep
    for (const val of node.children) {
      runTree(val, deep + 1)
    }
  }

  return result
}
