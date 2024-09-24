const stones = [2, 7, 4, 1, 8, 1]

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones: number[]) {
  const obj: Record<string, number> = {}

  stones.forEach((val) => {
    if (obj[val]) {
      obj[val]++
    } else {
      obj[val] = 1
    }
  })

  let keys = Object.keys(obj)
  let keysLength = keys.length
  while (obj[keys[0]] >= 2 || keysLength > 1) {
    const lastKey = keys[keysLength - 1]
    if (obj[lastKey] >= 2) {
      obj[lastKey] -= 2
      if (obj[lastKey] <= 0) {
        delete obj[lastKey]
      }
    } else {
      const prevKey = keys[keysLength - 2]
      const math = Number(lastKey) - Number(prevKey)
      if (math !== 0) {
        if (obj[math]) {
          obj[math]++
        } else {
          obj[math] = 1
        }
      }
      obj[lastKey]--
      obj[prevKey]--
      if (obj[lastKey] <= 0) {
        delete obj[lastKey]
      }
      if (obj[prevKey] <= 0) {
        delete obj[prevKey]
      }
    }

    keys = Object.keys(obj)
    keysLength = keys.length
  }
  if (!keys) {
    return 0
  }

  return Number(keys[0] ?? 0)
}

console.log(lastStoneWeight(stones))
