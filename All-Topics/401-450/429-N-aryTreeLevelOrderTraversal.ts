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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const deepList = {}

  runTree(root, 0)

  const result = Object.values(deepList)

  return result

  function runTree(node, deep) {
    if (!node) return

    if (deepList[deep]) {
      deepList[deep].push(node.val)
    } else {
      deepList[deep] = [node.val]
    }

    if (node.children) {
      for (const child of node.children) {
        runTree(child, deep + 1)
      }
    }
  }
}
