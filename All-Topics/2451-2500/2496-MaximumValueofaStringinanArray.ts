const strs = ["alic3", "bob", "3", "4", "00000"]

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs: string[]) {
  const length = strs.length
  let result = 0

  for (let i = 0; i < length; i++) {
    const element = strs[i]
    if (!isNaN(Number(element))) {
      if (result < Number(element)) {
        result = Number(element)
      }

      continue
    }

    if (element.length > result) {
      result = element.length
    }
  }
  return result
}

console.log(maximumValue(strs))
