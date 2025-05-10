import java.util.ArrayList;
import java.util.List;

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

  List<Integer> list;

  public List<Integer> inorderTraversal(TreeNode root) {
    this.list = new ArrayList<>();

    if (root == null)
      return list;

    getValue(root);

    return list;
  }

  public void getValue(TreeNode node) {
    if (node == null)
      return;

    if (node.left == null && node.right == null) {
      list.add(node.val);
    }

    getValue(node.left);
    if (node.left != null || node.right != null) {
      list.add(node.val);
    }
    getValue(node.right);

  }

}