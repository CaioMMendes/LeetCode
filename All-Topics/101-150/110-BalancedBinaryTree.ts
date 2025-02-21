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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true

  function searchTree(node) {
    if (!node) return 0 // Nó nulo tem altura 0

    let leftHeight = searchTree(node.left)
    let rightHeight = searchTree(node.right)

    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false // Se algum nó estiver desequilibrado, marca como falso
      return
    }

    return Math.max(leftHeight, rightHeight) + 1 // Retorna a altura do nó atual
  }

  searchTree(root)
  return balanced
}

console.log(isBalanced(root))
