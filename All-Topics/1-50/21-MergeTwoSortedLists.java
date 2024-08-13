
class Solution {
  int[] list1 = { 1, 2, 4 }, list2 = { 1, 3, 4 };

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

  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

    if (list1 == null) {
      return list2;
    }
    if (list2 == null) {
      return list1;
    }
    ListNode result = null;

    if (list1 != null && list2 != null) {
      if (list1.val < list2.val) {
        result = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        result = new ListNode(list2.val);
        list2 = list2.next;
      }
    }

    ListNode tail = result;

    while (true) {

      if (list1 == null) {
        tail.next = list2;
        break;
      }
      if (list2 == null) {
        tail.next = list1;
        break;
      }
      if (list1.val < list2.val) {
        tail.next = new ListNode(list1.val);
        list1 = list1.next;
        tail = tail.next;
      } else {
        tail.next = new ListNode(list2.val);
        list2 = list2.next;
        tail = tail.next;

      }

    }

    return result;

  }
}
