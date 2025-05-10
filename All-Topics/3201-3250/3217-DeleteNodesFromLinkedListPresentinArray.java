
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

  public ListNode modifiedList(int[] nums, ListNode head) {

    Set<Integer> values = new HashSet<>(Arrays.stream(nums)
        .boxed()
        .collect(Collectors.toList()));

    while (head != null && values.contains(head.val)) {
      head = head.next;
    }

    ListNode current = head;
    ListNode second = null;
    ListNode secondCurrent = null;
    while (current != null) {
      if (!values.contains(current.val)) {
        if (second == null) {
          second = new ListNode(current.val);
          secondCurrent = second;
        } else {
          secondCurrent.next = new ListNode(current.val);
          secondCurrent = secondCurrent.next;
        }
      }
      current = current.next;
    }

    return second;

  }
}