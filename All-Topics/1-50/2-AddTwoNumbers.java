
//  Definition for singly-linked list.

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

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

    if (l1 == null) {
      return l2;
    }
    if (l2 == null) {
      return l2;
    }

    int sum = 0;
    int tempSum = l1.val + l2.val;
    ListNode result = new ListNode((tempSum >= 10 ? tempSum - 10 : tempSum) + sum);
    sum = tempSum >= 10 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;
    ListNode head = result;
    if (sum == 1 && l1 == null && l2 == null) {
      head.next = new ListNode(1);
      head = head.next;
    }
    while (l1 != null || l2 != null) {
      if (l1 == null) {
        tempSum = l2.val + sum;
        head.next = new ListNode(tempSum >= 10 ? tempSum - 10 : tempSum);
        head = head.next;
        l2 = l2.next;
        sum = tempSum >= 10 ? 1 : 0;
        if (sum == 1 && l2 == null) {
          head.next = new ListNode(1);
          head = head.next;
        }
        continue;
      }
      if (l2 == null) {
        tempSum = l1.val + sum;
        head.next = new ListNode(tempSum >= 10 ? tempSum - 10 : tempSum);
        head = head.next;
        l1 = l1.next;
        sum = tempSum >= 10 ? 1 : 0;
        if (sum == 1 && l1 == null) {
          head.next = new ListNode(1);
          head = head.next;
        }
        continue;
      }

      tempSum = l1.val + l2.val + sum;
      head.next = new ListNode(tempSum >= 10 ? tempSum - 10 : tempSum);
      l1 = l1.next;
      l2 = l2.next;
      head = head.next;

      sum = tempSum >= 10 ? 1 : 0;

      if (sum == 1 && l1 == null && l2 == null) {
        head.next = new ListNode(1);
        head = head.next;
      }

    }

    return result;
  }
}