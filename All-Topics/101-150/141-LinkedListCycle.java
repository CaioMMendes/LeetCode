
class Solution {

  class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
      val = x;
      next = null;
    }
  }

  public boolean hasCycle(ListNode head) {

    ListNode current1 = head;
    ListNode current2 = head;

    while (current1 != null && current2 != null) {
      current1 = current1.next;
      current2 = current2.next;
      if (current2 != null) {
        current2 = current2.next;
        if (current1 == current2) {
          return true;
        }
      }
    }

    return false;
  }
}