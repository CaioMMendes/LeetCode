const root = [5, 3, 6, 2, 4, null, 7],
  k = 28

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root: any, k: number) {
  const set = new Set<number>()

  searchTree(root)

  for (const val of set) {
    if (set.has(k - val) && k - val !== val) {
      return true
    }
  }
  return false

  function searchTree(node: any) {
    if (node === null) return

    set.add(node.val)

    if (node.left) {
      searchTree(node.left)
    }
    if (node.right) {
      searchTree(node.right)
    }
  }
}

console.log(findTarget(root, k))
