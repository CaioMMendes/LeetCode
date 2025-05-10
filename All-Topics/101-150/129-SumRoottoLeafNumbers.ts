function TreeNode(this: any, val: any, left: any, right: any) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root: any) {
  let sum = 0

  function searchTree(val: string, node: any) {
    if (!node.left && !node.right)
      return (sum += Number(val + String(node.val)))

    if (node.left) {
      searchTree(val + String(node.val), node.left)
    }

    if (node.right) {
      searchTree(val + String(node.val), node.right)
    }
  }

  searchTree("", root)
  return sum
}
