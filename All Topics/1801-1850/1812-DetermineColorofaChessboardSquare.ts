const coordinates = "a1"

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates: string) {
  const odd = ["a", "c", "e", "g"]

  const number = Number(coordinates[1])

  if (odd.includes(coordinates[0])) {
    if (number % 2 === 0) {
      return true
    }
    return false
  } else {
    if (number % 2 === 0) {
      return false
    }
    return true
  }
}

console.log(squareIsWhite(coordinates))
