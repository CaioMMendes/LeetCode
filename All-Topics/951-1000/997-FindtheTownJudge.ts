const n = 2,
  trust = [[1, 2]]

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n: number, trust: number[][]) {
  const length = trust.length

  const count: Record<string, Set<number>> = {}
  const all = new Set()

  for (let i = 0; i < length; i++) {
    const element = trust[i][1]
    const value = trust[i][0]
    if (count[element]) {
      count[element].add(value)
    } else {
      count[element] = new Set([value])
    }
    all.add(value)
  }

  for (const key in count) {
    if (count[key].size === n - 1 && !all.has(Number(key))) {
      return Number(key)
    }
  }
  if (n === 1) return 1

  return -1
}

console.log(findJudge(n, trust))
