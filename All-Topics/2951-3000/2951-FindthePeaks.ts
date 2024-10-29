const mountain = [2, 4, 4]

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain: number[]) {
  const result = []

  for (let i = 0; i < mountain.length - 2; i++) {
    if (mountain[i + 1] > mountain[i] && mountain[i + 1] > mountain[i + 2]) {
      result.push(i + 1)
    }
  }
  return result
}

console.log(findPeaks(mountain))
