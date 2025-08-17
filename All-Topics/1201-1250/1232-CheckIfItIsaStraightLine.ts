const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
]

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates: number[][]) {
  const coordinate1 = coordinates[0]
  const coordinate2 = coordinates[1]

  for (let i = 2; i < coordinates.length; i++) {
    if (check(coordinates[i][0], coordinates[i][1])) continue
    return false
  }

  return true

  function check(x: number, y: number) {
    const equation =
      coordinate1[0] * coordinate2[1] +
      coordinate1[1] * x +
      coordinate2[0] * y -
      coordinate2[1] * x -
      coordinate1[0] * y -
      coordinate1[1] * coordinate2[0]

    return equation === 0
  }
}

console.log(checkStraightLine(coordinates))
