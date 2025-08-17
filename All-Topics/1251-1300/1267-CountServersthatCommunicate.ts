const grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid: number[][]) {
  const rowSet = new Set<number[]>()
  const columnSet = new Set()
  let allComputers = 0

  for (let i = 0; i < grid.length; i++) {
    let count = 0
    let temp = [0, 0]
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++
        temp = [i, j]
        if (count > 1) break
      }
    }
    if (count === 1) {
      rowSet.add(temp)
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    let count = 0
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        count++
        if (count > 1) break
      }
    }
    if (count === 1) {
      columnSet.add(i)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        allComputers++
      }
    }
  }

  const values = [...rowSet]
  const only = values.reduce((acc, cur) => {
    if (columnSet.has(cur[1])) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)

  return allComputers - only
}

console.log(countServers(grid))
