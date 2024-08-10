
class Solution {
  // Definition for singly-linked list.
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

  public ListNode deleteDuplicates(ListNode head) {
    ListNode atual = head;
    ListNode prox = null;
    while (atual != null && atual.next != null) {
      prox = atual.next;
      if (atual.val == prox.val) {
        atual.next = prox.next;
      } else {
        atual = prox;
      }

    }
    return head;
  }
}