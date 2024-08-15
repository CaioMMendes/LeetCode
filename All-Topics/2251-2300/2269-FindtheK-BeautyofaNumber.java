class Solution {
  public int divisorSubstrings(int num, int k) {
    int divisor = (int) Math.pow(10, k);
    int initialNumber = num;
    int result = 0;
    int rest = num % divisor;
    int math = rest == 0 ? -1 : initialNumber % rest;
    int count = 0;
    int length = String.valueOf(num).length() - k + 1;
    while (count < length) {
      if (math == 0) {
        result++;
      }
      num = (int) num / 10;
      rest = num % divisor;
      math = rest == 0 ? -1 : initialNumber % rest;
      count++;
    }

    return result;

  }
}