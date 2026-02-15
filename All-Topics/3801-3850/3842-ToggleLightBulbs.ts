const bulbs = [10, 30, 20, 10]

/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs: number[]) {
  const turnedOn: Record<string, number> = {}

  for (const val of bulbs) {
    if (turnedOn[val]) {
      turnedOn[val] = 0
    } else {
      turnedOn[val] = 1
    }
  }

  const result = []

  for (const key in turnedOn) {
    if (turnedOn[key] === 1) result.push(Number(key))
  }

  return result.sort((a, b) => a - b)
}

console.log(toggleLightBulbs(bulbs))
