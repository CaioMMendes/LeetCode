
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

  public ListNode reverseList(ListNode head) {
    if (head == null)
      return head;
    ListNode newList = new ListNode(head.val);
    if (head != null) {
      head = head.next;
    }

    while (head != null) {
      ListNode newNode = new ListNode(head.val);
      newNode.next = newList;
      newList = newNode;
      head = head.next;
    }

    return newList;
  }
}