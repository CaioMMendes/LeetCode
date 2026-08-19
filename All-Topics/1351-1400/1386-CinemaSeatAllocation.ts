const n = 3,
  reservedSeats = [
    [1, 2],
    [1, 3],
    [1, 8],
    [2, 6],
    [3, 1],
    [3, 10],
  ]

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n: number, reservedSeats: number[][]) {
  const rows: Record<string, Set<number>> = {}
  let result = 0

  for (const val of reservedSeats) {
    if (rows[val[0] - 1]) {
      rows[val[0] - 1].add(val[1] - 1)
    } else {
      rows[val[0] - 1] = new Set([val[1] - 1])
    }
  }

  const keys = Object.keys(rows)
  result += (n - keys.length) * 2

  for (const key of keys) {
    verify(rows[key])
  }

  return result

  function verify(row: Set<number>) {
    let hasOne = false

    if (!row.has(1) && !row.has(2) && !row.has(3) && !row.has(4)) {
      result++
      hasOne = true
    }

    if (!row.has(5) && !row.has(6) && !row.has(7) && !row.has(8)) {
      result++
      hasOne = true
    }

    if (!hasOne) {
      if (!row.has(3) && !row.has(4) && !row.has(5) && !row.has(6)) result++
    }
  }
}

console.log(maxNumberOfFamilies(n, reservedSeats))
