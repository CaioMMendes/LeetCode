const releaseTimes = [9, 29, 49, 50],
  keysPressed = "cbcd"

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes: number[], keysPressed: string) {
  let result = keysPressed[0]
  let resultValue = releaseTimes[0]
  let count = releaseTimes[0]

  for (let i = 1; i < releaseTimes.length; i++) {
    count = releaseTimes[i] - releaseTimes[i - 1]
    if (count > resultValue) {
      resultValue = count
      result = keysPressed[i]
    } else if (count === resultValue && keysPressed[i] > result) {
      result = keysPressed[i]
    }
  }
  return result
}

console.log(slowestKey(releaseTimes, keysPressed))
