const lowLimit = 1,
  highLimit = 10

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit: number, highLimit: number) {
  const count: Record<string, number> = {}

  for (let i = lowLimit; i <= highLimit; i++) {
    const string = String(i)
    const sum = string.split("").reduce((acc, cur) => {
      return acc + Number(cur)
    }, 0)
    if (count[sum]) {
      count[sum]++
    } else {
      count[sum] = 1
    }
  }

  return Math.max(...Object.values(count))
}

countBalls(lowLimit, highLimit)
