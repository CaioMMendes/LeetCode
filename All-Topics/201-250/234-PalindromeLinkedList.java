import java.util.ArrayList;

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

  public boolean isPalindrome(ListNode head) {
    ArrayList<Integer> list = new ArrayList<>();

    while (head != null) {
      list.add(head.val);
      head = head.next;
    }

    int size = list.size();
    int half = size / 2;

    for (int i = 0; i < half; i++) {
      if (list.get(i) != list.get(size - 1 - i)) {
        return false;
      }
    }

    return true;
  }
}
