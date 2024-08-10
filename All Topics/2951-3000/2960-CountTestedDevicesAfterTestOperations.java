
class Solution {
  public int countTestedDevices(int[] batteryPercentages) {
    int result = 0;
    int decrease = 0;

    for (int value : batteryPercentages) {
      if ((value - decrease) > 0) {
        decrease++;
        result++;
      }

    }

    return result;

  }
}