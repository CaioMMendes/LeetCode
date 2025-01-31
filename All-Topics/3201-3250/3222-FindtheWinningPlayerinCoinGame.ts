const x = 2,
  y = 7

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x: number, y: number) {
  let count = 0

  while (x >= 1 && y >= 4) {
    x--
    y -= 4
    count++
  }

  return count % 2 !== 0 ? "Alice" : "Bob"
}

console.log(winningPlayer(x, y))
