const flowerbed = [1, 0, 0, 0, 1],
  n = 1

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed: number[], n: number) {
  const length = flowerbed.length
  for (let i = 0; i < length; i++) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      i++
      n--
    }
    if (n <= 0) return true
  }
  if (n <= 0) return true
  return false
}

console.log(canPlaceFlowers(flowerbed, n))
