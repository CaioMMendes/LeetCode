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
  public boolean hasPathSum(TreeNode root, int targetSum) {
    if (root == null)
      return false;
    return searchTree(root, 0, targetSum);
  }

  public boolean searchTree(TreeNode node, int value, int target) {
    if (node.left == null && node.right == null) {
      if ((node.val + value) == target)
        return true;
      return false;
    }

    if (node.left != null) {
      if (searchTree(node.left, value + node.val, target))
        return true;
    }

    if (node.right != null) {
      if (searchTree(node.right, value + node.val, target))
        return true;
    }
    return false;
  }

}