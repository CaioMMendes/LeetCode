class MinHeap {
  heap: number[]
  constructor(arr = []) {
    this.heap = [...arr]
    this.heapify()
  }

  heapify() {
    if (this.heap.length <= 1) return
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.sink(i)
    }
  }

  push(val: number) {
    this.heap.push(val)
    this.swim(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.sink(0)
    return min
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  swim(index: number) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2)
      if (this.heap[parent] <= this.heap[index]) break
      ;[this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ]
      index = parent
    }
  }

  sink(index: number) {
    const n = this.heap.length
    while (2 * index + 1 < n) {
      let child = 2 * index + 1
      if (child + 1 < n && this.heap[child + 1] < this.heap[child]) child++
      if (this.heap[index] <= this.heap[child]) break
      ;[this.heap[index], this.heap[child]] = [
        this.heap[child],
        this.heap[index],
      ]
      index = child
    }
  }
}

var minOperations = function (nums: number[], k: number) {
  const minHeap = new MinHeap(nums.filter((num) => num < k)) // Filtro + Heap

  let result = 0

  while (minHeap.size() > 1 && minHeap.peek() < k) {
    const x = minHeap.pop()
    const y = minHeap.pop()
    const newNum = x * 2 + y

    if (newNum < k) {
      minHeap.push(newNum)
    }

    result++
  }

  return result
}
