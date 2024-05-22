//? Só funciona no site pois usa uma função externa (guess) que não está aqui

const n = 10,
  pick = 6

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let max = n
  let min = 1
  let half = Math.floor((max + min) / 2)

  let tentativa

  do {
    //@ts-ignore:next-line
    tentativa = guess(half)

    if (tentativa === 1) {
      min = half + 1
    }

    if (tentativa === -1) {
      max = half - 1
    }
    if (tentativa === 0) {
      return half
    } else {
      half = Math.floor((max + min) / 2)
    }
  } while (tentativa !== 0)
}

console.log(guessNumber(n))
