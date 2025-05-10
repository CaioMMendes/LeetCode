
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
  int min = Integer.MAX_VALUE;
  int result = Integer.MAX_VALUE;
  boolean error = true;

  public int findSecondMinimumValue(TreeNode root) {

    searchTree(root);

    return error ? -1 : result;

  }

  private void searchTree(TreeNode node) {

    if (node == null) {
      return;
    }
    if (node.val < min) {
      result = min;

      min = node.val;

    } else if (node.val <= result && node.val != min) {
      error = false;
      result = node.val;
    }

    if (node.left != null) {
      searchTree(node.left);
    }
    if (node.right != null) {
      searchTree(node.right);
    }
  }

}
