
class Solution {

  public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
      this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  public boolean isSameTree(TreeNode p, TreeNode q) {

    return percorre(p, q);

  }

  public boolean percorre(TreeNode node, TreeNode nodeTwo) {

    if (node == null && nodeTwo == null) {
      return true;
    }

    if (node == null && nodeTwo != null) {
      return false;
    }

    if (node != null && nodeTwo == null) {
      return false;
    }

    if (node.left == null && nodeTwo.left != null) {
      return false;
    }
    if (node.left != null && nodeTwo.left == null) {
      return false;
    }

    if (node.right == null && nodeTwo.right != null) {
      return false;
    }
    if (node.right != null && nodeTwo.right == null) {
      return false;
    }

    if (node.val != nodeTwo.val) {
      return false;
    }

    boolean leftTree = percorre(node.left, nodeTwo.left);

    boolean rightTree = percorre(node.right, nodeTwo.right);
    return leftTree && rightTree;
  }
}