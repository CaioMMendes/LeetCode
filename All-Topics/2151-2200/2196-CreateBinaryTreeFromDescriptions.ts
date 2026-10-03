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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const childs = {}

  const nodes = {}

  for (const val of descriptions) {
    nodes[val[1]] = true
    if (!nodes[val[0]]) {
      nodes[val[0]] = false
    }
    if (childs[val[0]]) {
      if (val[2] === 1) {
        childs[val[0]][0] = val[1]
      } else {
        childs[val[0]][1] = val[1]
      }
    } else {
      if (val[2] === 1) {
        childs[val[0]] = [val[1], null]
      } else {
        childs[val[0]] = [null, val[1]]
      }
    }
  }

  let root = null

  for (const key in nodes) {
    if (nodes[key] === false) root = new TreeNode(Number(key))
  }

  makeTree(root)

  return root

  function makeTree(node) {
    const child = childs[node.val]
    if (child[0]) {
      node.left = new TreeNode(Number(child[0]))
      if (childs[child[0]]) {
        makeTree(node.left)
      }
    }

    if (child[1]) {
      node.right = new TreeNode(Number(child[1]))
      console.log("right", child[1])
      if (childs[child[1]]) {
        makeTree(node.right)
      }
    }
  }
}
