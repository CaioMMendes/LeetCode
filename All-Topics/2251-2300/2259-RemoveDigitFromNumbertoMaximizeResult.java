
class Solution {
  public String removeDigit(String number, char digit) {
    String result = "0";
    for (int i = 0; i < number.length(); i++) {

      if (number.charAt(i) == digit) {
        String tempResult = number.substring(0, i) + number.substring(i + 1, number.length());

        int min = Math.min(result.length(), tempResult.length());
        for (int j = 0; j < min; j++) {
          if (tempResult.charAt(j) < result.charAt(j)) {
            break;
          }
          if (tempResult.charAt(j) == result.charAt(j))
            continue;

          result = tempResult;

        }

      }
    }
    return result;
  }
}