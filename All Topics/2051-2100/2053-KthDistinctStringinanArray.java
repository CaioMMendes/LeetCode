import java.util.LinkedHashMap;
import java.util.Map;

class Solution {
  public String kthDistinct(String[] arr, int k) {
    LinkedHashMap<String, Integer> map = new LinkedHashMap<>();

    for (String palavra : arr) {

      int element = map.get(palavra) == null ? 0 : map.get(palavra);
      map.put(palavra, element + 1);
    }
    int currentIndex = 0;
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      String chave = entry.getKey();
      Integer valor = entry.getValue();

      if (valor == 1) {
        currentIndex++;

      }
      if (currentIndex == k) {
        return chave;
      }
    }

    return "";

  }
}