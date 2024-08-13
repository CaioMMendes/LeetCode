const rings = "B0B6G0R6R0R6G9"

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings: string) {
  const ringsLength = rings.length
  let result = 0
  const count = {}

  for (let i = 0; i < ringsLength; i += 2) {
    if (count[rings[i + 1]] === true) {
      continue
    }

    if (!count[rings[i + 1]]) {
      count[rings[i + 1]] = [rings[i]]
    } else if (!count[rings[i + 1]].includes(rings[i])) {
      count[rings[i + 1]] = [...count[rings[i + 1]], rings[i]]
      if (count[rings[i + 1]].length === 3) {
        count[rings[i + 1]] = true
        result++
      }
    }
  }

  return result
}

console.log(countPoints(rings))
