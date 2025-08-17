const gifts = [25, 64, 9, 4, 100],
  k = 4

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts: number[], k: number) {
  for (let i = 0; i < k; i++) {
    let max = [0, 0]

    for (let j = 0; j < gifts.length; j++) {
      if (max[0] < gifts[j]) {
        max = [gifts[j], j]
      }
    }
    gifts.splice(max[1], 1)
    gifts.push(Math.floor(max[0] ** 0.5))
  }

  return gifts.reduce((acc, cur) => acc + cur, 0)
}

console.log(pickGifts(gifts, k))
