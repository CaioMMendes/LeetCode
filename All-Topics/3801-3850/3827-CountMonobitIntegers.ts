const n = 4

/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function (n: number) {
  let result = 0

  for (let i = 0; i <= n; i++) {
    const binary = i.toString(2).split("")
    const set = new Set(binary)

    if (set.size === 1) result++
  }

  return result
}

console.log(countMonobit(n))
