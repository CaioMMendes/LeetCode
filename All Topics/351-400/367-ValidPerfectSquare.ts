const num = 2000105819

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num: number) {
  let top = num
  let bot = 1
  let mid = Math.floor((top + bot) / 2)

  while (true) {
    const square = mid * mid

    if (bot > top) {
      return false
    }

    if (square === num) {
      return true
    }

    if (square > num) {
      top = mid - 1
    } else if (square < num) {
      bot = mid + 1
    }

    mid = Math.floor((top + bot) / 2)
  }
}

console.log(isPerfectSquare(num))
