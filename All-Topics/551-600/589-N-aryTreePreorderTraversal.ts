//@ts-nocheck

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const response = []
  runTree(root)
  return response

  function runTree(node) {
    if (!node?.children) return
    response.push(node.val)

    for (let child of node.children || []) {
      runTree(child)
    }
  }
}
