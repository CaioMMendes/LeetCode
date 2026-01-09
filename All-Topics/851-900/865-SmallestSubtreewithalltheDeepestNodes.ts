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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  const childrenMap = new Map()
  let deepestValue = [1, [root.val]]
  let find = null

  runTree(root, 1)

  for (const [key, val] of childrenMap) {
    let error = false

    for (const deepVal of deepestValue[1]) {
      if (!val.has(deepVal)) {
        error = true
        break
      }
    }

    if (error === true) continue
    find = key
    break
  }

  let result = root
  findResult(root)

  return result

  function findResult(node) {
    if (node.val === find) result = node

    if (node.left) {
      findResult(node.left)
    }

    if (node.right) {
      findResult(node.right)
    }
  }

  function runTree(node, deep) {
    if (node === null) return []

    if (deep > deepestValue[0]) {
      deepestValue = [deep, [node.val]]
    } else if (deep === deepestValue[0]) {
      deepestValue[1] = [...deepestValue[1], node.val]
    }

    const leftChildren = runTree(node.left, deep + 1)
    const rightChildren = runTree(node.right, deep + 1)

    const allChildren = new Set([
      node.val,
      ...(node.left ? [node.left.val] : []),
      ...leftChildren,
      ...(node.right ? [node.right.val] : []),
      ...rightChildren,
    ])

    childrenMap.set(node.val, allChildren)
    return allChildren
  }
}
