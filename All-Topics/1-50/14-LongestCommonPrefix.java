class Solution {
  public String longestCommonPrefix(String[] strs) {

    int length = strs[0].length();
    int count = 0;
    String result = "";
    int min = Integer.MAX_VALUE;
    for (int i = 0; i < strs.length; i++) {
      if (strs[i].length() < min) {
        min = strs[i].length();
      }
    }

    while (count < min) {
      char element = strs[0].charAt(count);
      for (int i = 0; i < strs.length; i++) {
        if (element != strs[i].charAt(count)) {
          return result;
        }
      }
      result += element;
      count++;
    }
    return result;
  }
}