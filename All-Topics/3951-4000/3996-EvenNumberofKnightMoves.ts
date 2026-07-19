const start = [1, 1],
  target = [2, 2]

/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function (start: number[], target: number[]) {
  const visited: Uint8Array<ArrayBuffer>[] = []
  const visitedOdd: Uint8Array<ArrayBuffer>[] = []

  for (let i = 0; i <= 7; i++) {
    visited.push(new Uint8Array(8))
    visitedOdd.push(new Uint8Array(8))
  }
  let result = false

  move(start, 0)

  function move(start: number[], count: number) {
    const [x, y] = start
    console.log([x, target[0]], [y, target[1]])
    console.log(x === target[0], y === target[1])
    if (x < 0 || x > 7 || y < 0 || y > 7) return

    if (count % 2 === 0) {
      if (visited[x][y]) return
      visited[x][y] = 1
    } else {
      if (visitedOdd[x][y]) return
      visitedOdd[x][y] = 1
    }

    if (x === target[0] && y === target[1] && count % 2 === 0) {
      result = true
      return
    }

    count++

    //top-left
    if (x - 2 >= 0 && y - 1 >= 0) {
      move([x - 2, y - 1], count)
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
      move([x - 1, y - 2], count)
    }

    //top-right
    if (x + 2 <= 7 && y - 1 >= 0) {
      move([x + 2, y - 1], count)
    }
    if (x + 1 <= 7 && y - 2 >= 0) {
      move([x + 1, y - 2], count)
    }

    //bot-left
    if (x - 2 >= 0 && y + 1 <= 7) {
      move([x - 2, y + 1], count)
    }
    if (x - 1 >= 0 && y + 2 <= 7) {
      move([x - 1, y + 2], count)
    }

    //bot-right
    if (x + 2 <= 7 && y + 1 <= 7) {
      move([x + 2, y + 1], count)
    }
    if (x + 1 <= 7 && y + 2 <= 7) {
      move([x + 1, y + 2], count)
    }
  }

  console.log(visited)
  return result
}

console.log(canReach(start, target))
