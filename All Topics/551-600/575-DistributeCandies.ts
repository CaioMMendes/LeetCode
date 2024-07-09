const candyType = [1, 1, 2, 2, 3, 3]

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType: number[]) {
  const numberOfDiffrent = new Set([...candyType])
  const length = candyType.length / 2

  if (numberOfDiffrent.size >= length) {
    return length
  }

  return numberOfDiffrent.size
}

console.log(distributeCandies(candyType))
