const m = 2,
  n = 3

/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m: number, n: number) {
  const result = []

  for (let i = 0; i < m; i++) {
    if (i === m - 1) {
      result.push("".padStart(n, "."))
    } else {
      result.push(".".padEnd(n, "#"))
    }
  }
  return result
}

console.log(createGrid(m, n))
