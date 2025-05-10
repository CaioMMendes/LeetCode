
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

  public ListNode rotateRight(ListNode head, int k) {

    ListNode current = head;

    // Se a lista for vazia ou tiver apenas um elemento, retorne a lista original
    if (current == null || current.next == null)
      return current;

    // Contar o número de nós
    int count = 1; // Inicia com 1 para contar o primeiro nó
    while (current.next != null) {
      current = current.next;
      count++;
    }

    // Calcular o número efetivo de rotações
    int times = k % count;
    if (times == 0)
      return head; // Se times for 0, a lista não precisa ser rotacionada

    // Achar o ponto de corte
    int init = count - times;
    ListNode newTail = head;
    for (int i = 1; i < init; i++) {
      newTail = newTail.next;
    }

    // Separar a lista em duas partes
    ListNode newHead = newTail.next;
    newTail.next = null;

    // Encontrar o final da segunda parte da lista
    ListNode lastNode = newHead;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }

    // Conectar o último nó da lista de volta ao head original
    lastNode.next = head;

    // Retornar a nova cabeça da lista rotacionada
    return newHead;
  }
}
