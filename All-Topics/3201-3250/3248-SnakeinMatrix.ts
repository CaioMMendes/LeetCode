const n = 2,
  commands = ["RIGHT", "DOWN"]

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n: number, commands: string[]) {
  const matrix = []
  let count = 0
  for (let i = 0; i < n; i++) {
    const array = []
    for (let j = 0; j < n; j++) {
      array.push(count)
      count++
    }
    matrix.push(array)
  }
  let line = 0
  let column = 0

  for (const command of commands) {
    if (command === "RIGHT") {
      column++
    }
    if (command === "LEFT") {
      column--
    }
    if (command === "DOWN") {
      line++
    }
    if (command === "UP") {
      line--
    }
  }

  return matrix[line][column]
}

console.log(finalPositionOfSnake(n, commands))
