
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

  public ListNode removeElements(ListNode head, int val) {
    while (head != null && head.val == val) {
      head = head.next;
    }
    if (head == null)
      return head;

    ListNode list = new ListNode(head.val);
    head = head.next;
    ListNode init = list;

    while (head != null) {
      if (head.val != val) {
        list.next = new ListNode(head.val);
        list = list.next;
      }
      head = head.next;
    }

    return init;
  }
}