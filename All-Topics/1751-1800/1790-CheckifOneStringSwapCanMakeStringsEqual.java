class Solution {
  public boolean areAlmostEqual(String s1, String s2) {
    if (s1.length() != s2.length())
      return false;

    int count = 0;
    int length = s1.length();
    StringBuilder sb = new StringBuilder(s1);
    int index1 = -1;
    int index2 = -1;
    for (int i = 0; i < length; i++) {
      if (s1.charAt(i) != s2.charAt(i)) {
        if (index1 == -1) {
          index1 = i;
        } else if (index1 != -1)
          index2 = i;
        count++;
      }

      if (count > 2)
        return false;

    }
    if (count != 2 && count != 0)
      return false;
    if (count == 0)
      return true;
    char tempChar = s1.charAt(index1);
    sb.setCharAt(index1, s1.charAt(index2));
    sb.setCharAt(index2, tempChar);

    if (sb.toString().equals(s2))
      return true;
    return false;

  }
}