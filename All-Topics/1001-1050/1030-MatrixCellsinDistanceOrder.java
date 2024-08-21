import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Solution {
    public int[][] allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {


     List<int[]> cells = new ArrayList()<>();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                cells.add(new int[]{i, j});
            }
        }

    Collections.sort(cells, new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                int dist1 = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
                int dist2 = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
                return dist1 - dist2;
            }
        });

        // Converte a lista para um array de arrays
        return cells.toArray(new int[cells.size()][]);
    }
}