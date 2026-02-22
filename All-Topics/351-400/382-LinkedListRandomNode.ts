//@ts-nocheck

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  let currentNode = head
  let listSize = 0

  while (currentNode !== null) {
    listSize++
    currentNode = currentNode.next
  }

  this.listSize = listSize
  this.head = head
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let nodeNumber = randomIntFrom1ToN(this.listSize)
  let currentNode = this.head
  while (nodeNumber > 1) {
    currentNode = currentNode.next
    nodeNumber--
  }

  return currentNode?.val

  function randomIntFrom1ToN(n) {
    return Math.floor(Math.random() * n) + 1
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
