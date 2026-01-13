const squares = [
  [0, 0, 2],
  [1, 1, 1],
]

/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares: number[][]) {
  let low = Infinity
  let high = -Infinity

  for (const [, y, l] of squares) {
    low = Math.min(low, y)
    high = Math.max(high, y + l)
  }

  while (high - low > 1e-6) {
    const mid = (low + high) / 2
    const diff = getDiff(mid)

    if (diff > 0) {
      low = mid
    } else {
      high = mid
    }
  }

  return (low + high) / 2

  function getDiff(mid: number) {
    let top = 0
    let bot = 0

    for (const [x, y, l] of squares) {
      const bottom = y
      const topY = y + l
      const area = l * l

      if (mid <= bottom) {
        top += area
      } else if (mid >= topY) {
        bot += area
      } else {
        bot += (mid - bottom) * l
        top += (topY - mid) * l
      }
    }

    return top - bot
  }
}

console.log(separateSquares(squares))
