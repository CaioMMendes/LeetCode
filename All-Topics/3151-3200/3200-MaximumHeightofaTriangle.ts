const red = 2,
  blue = 4

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red: number, blue: number) {
  let count = 0
  let value

  value = resolve(red, blue)
  const temp = resolve(blue, red)
  if (temp > value) value = temp

  function resolve(max: number, min: number) {
    count = 0
    while (true) {
      if (count % 2 === 0) {
        max -= count + 1
        if (max < 0) {
          return count
        }
        count++
      } else {
        min -= count + 1
        if (min < 0) {
          return count
        }
        count++
      }
    }
  }

  return value
}

console.log(maxHeightOfTriangle(red, blue))
