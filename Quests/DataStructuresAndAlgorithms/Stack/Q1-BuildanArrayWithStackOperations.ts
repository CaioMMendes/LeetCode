const target = [1, 3],
  n = 3

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target: number[], n: number) {
  const result = []

  let current = 1
  for (const val of target) {
    for (let i = current; i <= n; i++) {
      if (val === i) {
        result.push("Push")
        current++
        break
      } else {
        result.push("Push")
        result.push("Pop")
        current++
      }
    }
  }

  return result
}

console.log(buildArray(target, n))
