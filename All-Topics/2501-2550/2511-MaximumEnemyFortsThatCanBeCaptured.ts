const forts = [1, 0, 0, -1, 0, 0, 0, 0, 1]

/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts: number[]) {
  let result = 0

  let count = 0
  let active = false

  for (let i = 0; i < forts.length; i++) {
    const element = forts[i]
    if (element === 1) {
      count = 0
      active = true
      continue
    }
    if (element === -1 && active && count > result) {
      result = count
      count = 0
      active = false
    } else if (element === -1) active = false
    count++
  }

  for (let i = forts.length - 1; i >= 0; i--) {
    const element = forts[i]
    if (element === 1) {
      count = 0
      active = true
      continue
    }
    if (element === -1 && active && count > result) {
      result = count
      count = 0
      active = false
    } else if (element === -1) active = false
    count++
  }

  return result
}

console.log(captureForts(forts))
