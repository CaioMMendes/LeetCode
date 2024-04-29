const candies = [2, 3, 5, 1, 3],
  extraCandies = 3

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies: number[], extraCandies: number) {
  const max = Math.max(...candies)
  const minCandies = max - extraCandies

  return candies.map((candie) => candie >= minCandies)
}

console.log(kidsWithCandies(candies, extraCandies))
