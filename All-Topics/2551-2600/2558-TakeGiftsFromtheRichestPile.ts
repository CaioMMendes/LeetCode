const gifts = [25, 64, 9, 4, 100],
  k = 4

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts: number[], k: number) {
  gifts.sort((a, b) => b - a)

  for (let i = 0; i < k; i++) {
    gifts[0] = Math.floor(gifts[0] ** 0.5)
    gifts.sort((a, b) => b - a)
  }

  return gifts.reduce((acc, cur) => acc + cur, 0)
}

console.log(pickGifts(gifts, k))
