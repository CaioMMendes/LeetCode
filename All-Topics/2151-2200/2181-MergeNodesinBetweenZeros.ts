/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
interface ListNode {
  val: number
  next: ListNode | null
}

var mergeNodes = function (head: ListNode | null): ListNode | null {
  function ListNode(this: any, val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }

  if (head === null) {
    return head
  }

  let current: ListNode | undefined
  let currentRun: ListNode | undefined | null
  let sum = 0

  while (head !== null) {
    if (head.val === 0) {
      if (sum > 0) {
        if (current === undefined) {
          current = new (ListNode as any)(sum)
          currentRun = current
        } else {
          const newNode = new (ListNode as any)(sum)
          currentRun!.next = newNode
          currentRun = currentRun?.next
        }
      }
      sum = 0
    }
    sum += head.val
    head = head.next
  }

  return current || null
}
