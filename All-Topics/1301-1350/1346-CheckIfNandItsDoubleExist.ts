const arr = [10, 2, 5, 3]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr: number[]) {
  const set = new Set(arr)

  for (const val of set) {
    if (set.has(2 * val)) {
      if (val === 0 && arr.filter((val) => val === 0).length < 2) continue
      return true
    }
  }
  return false
}

console.log(checkIfExist(arr))
