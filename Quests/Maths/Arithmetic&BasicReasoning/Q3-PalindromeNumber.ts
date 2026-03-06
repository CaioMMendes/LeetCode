const x = 121

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x: number) {
  if (x < 0) return false
  const result = []

  let limit = 1

  if (x % 10 === 0 && x !== 0) return false

  while (true) {
    const val = 10 ** limit

    if (val > x) {
      limit--
      break
    } else {
      limit++
    }
  }

  while (x > 0) {
    const floor = Math.floor(x / 10 ** limit)
    result.push(floor)
    x -= floor * 10 ** limit
    limit -= 1
  }

  const reversed = [...result].reverse()

  for (let i = 0; i < reversed.length; i++) {
    if (result[i] !== reversed[i]) return false
  }

  return true
}

console.log(isPalindrome(x))
