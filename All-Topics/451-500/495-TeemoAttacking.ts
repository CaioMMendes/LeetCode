const timeSeries = [1, 4],
  duration = 2

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries: number[], duration: number) {
  let previousTime = null
  let result = 0

  for (let i = 0; i < timeSeries.length; i++) {
    const element = timeSeries[i]
    if (previousTime !== null) {
      if (element - previousTime > duration) {
        result += duration
      } else {
        result += element - previousTime
      }
    }
    previousTime = element
  }

  result += duration
  return result
}

console.log(findPoisonedDuration(timeSeries, duration))
