class Solution {
  public int maximumProduct(int[] nums) {

    int max1 = -Integer.MAX_VALUE;
    int max2 = -Integer.MAX_VALUE;
    int max3 = -Integer.MAX_VALUE;

    int maxNegative1 = Integer.MAX_VALUE;
    int maxNegative2 = Integer.MAX_VALUE;

    for (int num : nums) {
      if (num >= max1) {
        max3 = max2;
        max2 = max1;
        max1 = num;
      } else if (num >= max2) {
        max3 = max2;
        max2 = num;
      } else if (num >= max3) {
        max3 = num;
      }

      if (maxNegative1 >= num) {
        maxNegative2 = maxNegative1;
        maxNegative1 = num;
      } else if (maxNegative2 >= num) {
        maxNegative2 = num;
      }
    }

    return (max1 * max2 * max3) >= (maxNegative1 * maxNegative2 * max1) ? max1 * max2 * max3
        : (maxNegative1 * maxNegative2 * max1);
  }
}