
class TreeNode {
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

class Solution {

  int result = 0;

  public int maxDepth(TreeNode root) {
    int teste = 0;

    findLast(root, teste);
    return result;
  }

  private void findLast(TreeNode no, int count) {
    if (no == null) {

      if (count > result) {
        result = count;
      }
      return;
    }

    findLast(no.left, count + 1);

    findLast(no.right, count + 1);

  }
}
