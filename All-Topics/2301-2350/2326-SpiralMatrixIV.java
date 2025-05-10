
class Solution {

  public class ListNode {

    int val;

    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
      this.val = val;
    }

    ListNode(int val, ListNode next) {
      this.val = val;
      this.next = next;
    }

  }

  public int[][] spiralMatrix(int m, int n, ListNode head) {
    int[][] matrix = new int[m][n];

    // Inicializando a matriz com -1, pois os espaços não preenchidos com valores da
    // lista serão -1
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        matrix[i][j] = -1;
      }
    }

    int top = 0, bot = m - 1, left = 0, right = n - 1;

    // Preenchendo a matriz em espiral enquanto há nós na lista
    while (head != null && top <= bot && left <= right) {

      // Preenchendo da esquerda para a direita na borda superior
      for (int i = left; i <= right && head != null; i++) {
        matrix[top][i] = head.val;
        head = head.next;
      }
      top++;

      // Preenchendo de cima para baixo na borda direita
      for (int i = top; i <= bot && head != null; i++) {
        matrix[i][right] = head.val;
        head = head.next;
      }
      right--;

      // Preenchendo da direita para a esquerda na borda inferior
      if (top <= bot) {
        for (int i = right; i >= left && head != null; i--) {
          matrix[bot][i] = head.val;
          head = head.next;
        }
        bot--;
      }

      // Preenchendo de baixo para cima na borda esquerda
      if (left <= right) {
        for (int i = bot; i >= top && head != null; i--) {
          matrix[i][left] = head.val;
          head = head.next;
        }
        left++;
      }
    }

    return matrix;
  }
}