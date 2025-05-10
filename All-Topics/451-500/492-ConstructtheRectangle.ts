const area = 4

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area: number) {
  let start = Math.floor(area ** 0.5)
  let min = +Infinity
  let result = [0, 0]
  while (start >= 1) {
    const h = area / start
    const abs = Math.abs(h - start)
    if (Number.isInteger(h) && abs < min) {
      min = abs
      result = [h, start]
    }
    start--
  }
  return result
}

console.log(constructRectangle(area))
