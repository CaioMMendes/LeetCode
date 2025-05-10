const g = [1, 2, 3],
  s = [1, 1]

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g: number[], s: number[]) {
  const sortedG = g.sort((a, b) => a - b)
  const sortedS = s.sort((a, b) => a - b)

  let result = 0
  let count = 0
  for (let i = 0; i < g.length; i++) {
    for (; count < s.length; ) {
      if (sortedG[i] <= sortedS[count]) {
        result++
        count++
        if (count === s.length) return result
        break
      }
      count++
      if (count === s.length) return result
    }
  }

  return result
}

console.log(findContentChildren(g, s))
