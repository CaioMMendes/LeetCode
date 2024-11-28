const root = [4, 2, 7, 1, 3],
  val = 2

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root: any, val: any) {
  let result = null

  function searchTree(node: any) {
    if (!node.left && !node.right) {
      if (node.val === val) {
        result = node
        return node
      }
      return
    }

    if (node.val === val) {
      result = node
      return node
    }
    if (node.left) {
      searchTree(node.left)
    }
    if (node.right) {
      searchTree(node.right)
    }
  }

  searchTree(root)

  return result
}

//todo dava pra ter feito melhor, verificando se o valor é maior e indo pra direção certa

console.log(searchBST(root, val))
