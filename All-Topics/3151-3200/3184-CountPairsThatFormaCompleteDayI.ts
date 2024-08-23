const hours = [12, 12, 30, 24, 24]

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours: number[]) {
  let result = 0
  const length = hours.length
  for (let i = 0; i < length; i++) {
    const element1 = hours[i]
    for (let j = i + 1; j < length; j++) {
      const element2 = hours[j]
      if ((element1 + element2) % 24 === 0) {
        result++
      }
    }
  }
  return result
}

console.log(countCompleteDayPairs(hours))
