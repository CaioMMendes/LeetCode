class Solution {
  public int maxProfit(int[] prices) {

    boolean hasStock = false;
    int sell = -1;
    int buy = -1;
    int result = 0;

    for (int i = 0; i < prices.length; i++) {
      int value = prices[i];

      if (value <= buy || buy == -1) {
        buy = value;
        sell = 0;
        continue;
      }

      if (value >= sell) {
        sell = value;
      }
      if ((sell - buy) > result) {
        result = sell - buy;
      }

    }

    return result;

  }
}