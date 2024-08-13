const x = 4

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x: number) {
  let top = x
  let bot = 0
  let mid = Math.floor((top + bot) / 2)

  while (true) {
    const square = mid * mid

    if (bot > top) {
      return top
    }

    if (square === x) {
      return mid
    }

    if (square > x) {
      top = mid - 1
    } else if (square < x) {
      bot = mid + 1
    }

    mid = Math.floor((top + bot) / 2)
  }
}

console.log(mySqrt(x))
