//@ts-nocheck

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = []

  runTree(root)
  function runTree(node) {
    if (!node) return

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        runTree(node.children[i])
      }
    }
    result.push(node.val)
  }

  return result
}
