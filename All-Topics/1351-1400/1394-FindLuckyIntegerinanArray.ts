const arr = [2, 2, 3, 4]

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr: number[]) {
  let result = -1

  const length = arr.length
  const count: Record<string, number> = {}
  for (let i = 0; i < length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++
    } else {
      count[arr[i]] = 1
    }
  }

  for (const key in count) {
    if (Number(key) === count[key] && count[key] > result) {
      result = count[key]
    }
  }

  return result
}

console.log(findLucky(arr))
