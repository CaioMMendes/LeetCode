import java.util.HashMap;
import java.util.Map;

class Solution {
  public int duplicateNumbersXOR(int[] nums) {
    int result = 0;

    Map<Integer, Boolean> map = new HashMap<>();

    for (int number : nums) {
      if (map.get(number) == null) {
        map.put(number, false);
        continue;
      }

      result = result ^ number;

    }

    return result;

  }
}