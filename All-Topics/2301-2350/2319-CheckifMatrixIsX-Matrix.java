class Solution {
  public boolean checkXMatrix(int[][] grid) {

    int rows = grid.length;
    int columns = grid[0].length;
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < rows; j++) {
        int element = grid[i][j];
        if (i == j || (j == (columns - 1 - i))) {
          if (element == 0)
            return false;
          continue;
        }
        if (element != 0)
          return false;
      }
    }
    return true;
  }
}