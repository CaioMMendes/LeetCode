class Solution {
  public int countPrefixSuffixPairs(String[] words) {
    int result = 0;
    for (int i = 0; i < words.length; i++) {
      String element = words[i];

      for (int j = i + 1; j < words.length; j++) {
        String secondElement = words[j];
        int elementLength = element.length();
        int secondElementLength = secondElement.length();
        if (elementLength > secondElementLength)
          continue;

        String initial = secondElement.substring(0, elementLength);
        String end = secondElement.substring(secondElementLength - elementLength, secondElementLength);

        if (initial.equals(element) && end.equals(element))
          result++;

      }

    }

    return result;
  }
}