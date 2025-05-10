const colors = [1, 1, 1]

/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors: number[]) {
  let result = 0
  colors.push(colors[0])
  colors.unshift(colors[colors.length - 2])
  const length = colors.length

  for (let i = 1; i < length - 1; i++) {
    if (colors[i] !== colors[i - 1] && colors[i] !== colors[i + 1]) {
      result++
    }
  }
  return result
}

console.log(numberOfAlternatingGroups(colors))
