const head = [18, 6, 10, 3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  val = 0
  next = null
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head: any) {
  let current = head
  let lastCurrent = head

  current = current.next

  runList(current)
  return head

  function runList(node: any) {
    if (!node) {
      return
    }
    const value = gcd(lastCurrent.val, node.val)
    const newNode = new ListNode(value)

    newNode.next = lastCurrent.next
    lastCurrent.next = newNode
    lastCurrent = lastCurrent.next
    lastCurrent = lastCurrent.next
    current = current.next
    runList(current)
  }

  function gcd(a: number, b: number) {
    while (b !== 0) {
      ;[a, b] = [b, a % b]
    }
    return a
  }
}

console.log(insertGreatestCommonDivisors(head))
