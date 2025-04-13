const x = 2,
  y = 7,
  z = 4
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x: number, y: number, z: number) {
  const firstDistance = Math.abs(z - x)
  const secondDistance = Math.abs(z - y)
  if (firstDistance === secondDistance) {
    return 0
  } else if (firstDistance > secondDistance) {
    return 2
  }
  return 1
}

console.log(findClosest(x, y, z))
