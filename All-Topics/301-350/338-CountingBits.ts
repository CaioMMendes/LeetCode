const n = 5

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n: number) {
  const result: number[] = [0]
  for (let i = 1; i <= n; i++) {
    let binary = i.toString(2)
    const count = binary.match(/1/g)
    result.push(count?.length ? count.length : 0)
  }
  return result
}

console.log(countBits(n))
