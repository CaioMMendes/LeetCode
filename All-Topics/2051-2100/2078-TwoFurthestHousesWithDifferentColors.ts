const colors = [1, 1, 1, 6, 1, 1, 1]

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors: number[]) {
  const map = colors.map((color, index) => {
    let max = 0
    const finded = new Set([color])
    for (let i = index - 1; i >= 0; i--) {
      if (finded.has(colors[i])) continue
      const dif = index - i
      if (dif > max) max = dif
    }
    return max
  })

  return Math.max(...map)
}

console.log(maxDistance(colors))
