import java.util.ArrayList;
import java.util.List;

class Solution {
  public List<String> summaryRanges(int[] nums) {
    ArrayList<String> result = new ArrayList<>();
    Integer tail = null;
    Integer head = null;

    for (int i = 0; i < nums.length; i++) {
      int value = nums[i];
      if (tail == null) {
        tail = value;
        continue;
      }
      if (value == (nums[i - 1] + 1)) {
        head = value;
        continue;
      }

      if (head == null) {
        result.add(Integer.toString(tail));
      } else {
        result.add(Integer.toString(tail) + "->" + Integer.toString(head));
      }

      tail = value;
      head = null;
    }
    if (tail != null && head == null) {
      result.add(Integer.toString(tail));
    } else if (tail != null && head != null) {
      result.add(Integer.toString(tail) + "->" + Integer.toString(head));
    }
    return result;
  }
}