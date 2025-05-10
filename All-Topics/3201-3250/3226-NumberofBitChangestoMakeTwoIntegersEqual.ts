const n = 13,
  k = 4

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n: number, k: number) {
  const binaryOne = n.toString(2)
  let result = 0

  if (k > n) return -1
  if (k === n) return 0

  const binaryLength = binaryOne.length
  const binaryTwo = k.toString(2).padStart(binaryLength, "0")

  for (let i = 0; i < binaryLength; i++) {
    if (binaryOne[i] !== binaryTwo[i]) {
      if (binaryTwo[i] === "1") return -1
      result++
    }
  }
  return result
}

console.log(minChanges(n, k))
