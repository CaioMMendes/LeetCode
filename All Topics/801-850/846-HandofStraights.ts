const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
  groupSize = 3

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  const count = {}

  const numsLength = hand.length

  if (numsLength % groupSize !== 0) {
    return false
  }

  for (let i = 0; i < numsLength; i++) {
    if (count[hand[i]]) {
      count[hand[i]]++
    } else {
      count[hand[i]] = 1
    }
  }

  for (let key in count) {
    const value = count[key]
    const numberKey = Number(key)
    for (let index = 0; index < value; index++) {
      for (let j = 0; j < groupSize; j++) {
        const numberPlusJ = numberKey + j
        if (count[numberPlusJ] > 0) {
          count[numberPlusJ]--
        } else {
          return false
        }
      }
    }
  }

  return true
}

console.log(isNStraightHand(hand, groupSize))
