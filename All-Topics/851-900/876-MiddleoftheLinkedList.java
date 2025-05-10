
class Solution {
  public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
      this.val = val;
    }

    ListNode(int val, ListNode next) {
      this.val = val;
      this.next = next;
    }
  }

  public ListNode middleNode(ListNode head) {
    int count = 0;
    ListNode current = head;
    while (current != null) {
      count++;
      current = current.next;
    }
    int middle = (int) Math.floor(count / 2);
    ListNode result = head;
    for (int i = 0; i < middle; i++) {
      result = result.next;
    }
    return result;
  }
}