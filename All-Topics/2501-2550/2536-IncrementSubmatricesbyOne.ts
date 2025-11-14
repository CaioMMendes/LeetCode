const n = 3,
  queries = [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ]

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n: number, queries: number[][]) {
  const arr = []

  for (let i = 0; i < n; i++) {
    arr.push(Array(n).fill(0))
  }

  for (let i = 0; i < queries.length; i++) {
    const rows = [queries[i][0], queries[i][2]]
    const columns = [queries[i][1], queries[i][3]]

    for (let j = rows[0]; j <= rows[1]; j++) {
      for (let k = columns[0]; k <= columns[1]; k++) {
        arr[j][k]++
      }
    }
  }

  return arr
}

console.log(rangeAddQueries(n, queries))
