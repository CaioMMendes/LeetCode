import java.util.HashMap;
import java.util.Map;

class Solution {
  public int numEquivDominoPairs(int[][] dominoes) {
    Map<String, Integer> map = new HashMap<>();
    int result = 0;

    for (int[] value : dominoes) {

      String tail = value[0] > value[1] ? "[" + Integer.toString(value[1]) + ","
          : "[" + Integer.toString(value[0]) + ",";
      String head = value[0] <= value[1] ? Integer.toString(value[1]) + "]" : Integer.toString(value[0]) + "]";
      String string = tail + head;

      map.put(string, map.get(string) != null ? map.get(string) + 1 : 0);

    }

    for (Map.Entry<String, Integer> pair : map.entrySet()) {
      Integer value = pair.getValue();
      for (int i = value; 0 < i; i--) {
        result += i;
      }

    }

    return result;
  }
}