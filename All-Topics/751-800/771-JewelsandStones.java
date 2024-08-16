class Solution {
  public int numJewelsInStones(String jewels, String stones) {
    String newStones = stones;
    for (int i = 0; i < jewels.length(); i++) {
      newStones = newStones.replace(String.valueOf(jewels.charAt(i)), "");
    }

    return stones.length() - newStones.length();
  }
}