/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original: any, cloned: any, target: any) {
  let result: any = null

  function runTree(originalNode: any, clonedNode: any) {
    if (!originalNode || result) return

    // Verifica se o nó original é o nó de destino
    if (originalNode === target) {
      result = clonedNode // Guarda o nó correspondente na árvore clonada
      return
    }

    // Percorre a subárvore esquerda
    runTree(originalNode.left, clonedNode.left)

    // Percorre a subárvore direita
    runTree(originalNode.right, clonedNode.right)
  }

  runTree(original, cloned)
  return result
}
