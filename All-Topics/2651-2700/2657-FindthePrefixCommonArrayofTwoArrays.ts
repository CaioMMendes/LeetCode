const A = [1, 3, 2, 4],
  B = [3, 1, 2, 4]

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A: number[], B: number[]) {
  const result = []
  let count = 0
  const common = new Set()
  const aSet = new Set()
  const bSet = new Set()

  for (let i = 0; i < A.length; i++) {
    aSet.add(A[i])
    bSet.add(B[i])

    if (A[i] === B[i]) {
      count++
      result.push(count)
      continue
    }

    if (bSet.has(A[i])) {
      count++
    }
    if (aSet.has(B[i])) {
      count++
    }

    result.push(count)
  }

  return result
}

console.log(findThePrefixCommonArray(A, B))
