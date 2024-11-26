const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
  root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]

interface ThisTypes {
  val: number | undefined
  left: ThisTypes | null
  right: ThisTypes | null
}

function TreeNode(
  this: ThisTypes,
  val: number | undefined,
  left: ThisTypes,
  right: ThisTypes
) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1: ThisTypes, root2: ThisTypes) {
  const array1: number[] = []
  const array2: number[] = []

  searchLeaf(root1, array1)
  searchLeaf(root2, array2)

  function searchLeaf(node: ThisTypes, arraytoPush: number[]) {
    if (!node.left && !node.right && node.val) {
      return arraytoPush.push(node.val)
    }
    if (node.left) {
      searchLeaf(node.left, arraytoPush)
    }
    if (node.right) {
      searchLeaf(node.right, arraytoPush)
    }
  }

  if (array1.length !== array2.length) return false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }

  return true
}

console.log(leafSimilar(root1, root2))
