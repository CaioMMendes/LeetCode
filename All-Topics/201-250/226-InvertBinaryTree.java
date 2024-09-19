
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

  public TreeNode invertTree(TreeNode root) {
    if (root == null)
      return root;
    TreeNode current = root;
    invert(current);
    return root;

  }

  public void invert(TreeNode root) {
    if (root == null)
      return;
    TreeNode temp = root.right;
    root.right = root.left;
    root.left = temp;

    invert(root.left);
    invert(root.right);

  }

}