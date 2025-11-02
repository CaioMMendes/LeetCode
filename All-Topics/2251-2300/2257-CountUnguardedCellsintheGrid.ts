const m = 4,
  n = 6,
  guards = [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  walls = [
    [0, 1],
    [2, 2],
    [1, 4],
  ]

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
) {
  const arr: number[][] = []

  for (let i = 0; i < m; i++) {
    const newArray: number[] = Array(n).fill(0)
    arr.push(newArray)
  }

  for (const guard of guards) {
    arr[guard[0]][guard[1]] = 1
  }

  for (const wall of walls) {
    arr[wall[0]][wall[1]] = 2
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 1) continue
      runRoad([i, j])
    }
  }

  let result = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) result++
    }
  }

  return result

  function runRoad(coord: number[]) {
    const row = coord[0]
    const column = coord[1]
    for (let j = column + 1; j < arr[0].length; j++) {
      if (arr[row][j] !== 0 && arr[row][j] !== 3) {
        break
      } else {
        arr[row][j] = 3
      }
    }
    for (let j = column - 1; j >= 0; j--) {
      if (arr[row][j] !== 0 && arr[row][j] !== 3) {
        break
      } else {
        arr[row][j] = 3
      }
    }

    for (let i = row + 1; i < arr.length; i++) {
      if (arr[i][column] !== 0 && arr[i][column] !== 3) {
        break
      } else {
        arr[i][column] = 3
      }
    }

    for (let i = row - 1; i >= 0; i--) {
      if (arr[i][column] !== 0 && arr[i][column] !== 3) {
        break
      } else {
        arr[i][column] = 3
      }
    }
  }
}

console.log(countUnguarded(m, n, guards, walls))
