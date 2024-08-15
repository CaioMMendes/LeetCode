class Solution {
  public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {

    int[] result = { -1, -1 };
    int length = nums.length - indexDifference;

    for (int j = 0; j < length; j++) {
      for (int i = j + indexDifference; i < nums.length; i++) {

        if (Math.abs(nums[j] - nums[i]) >= valueDifference) {
          result[0] = j;
          result[1] = i;
          return result;
        }
      }
    }

    return result;
  }
}