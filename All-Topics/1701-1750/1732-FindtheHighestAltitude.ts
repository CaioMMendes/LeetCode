/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0
  const gainLength = gain.length
  let higest = 0

  for (let i = 0; i < gainLength; i++) {
    altitude += gain[i]

    if (altitude > higest) {
      higest = altitude
    }
  }

  return higest
}
