const arr = [1, 2, 2, 1, 1, 3]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr: number[]) {
  const count = {}

  const length = arr.length

  for (let i = 0; i < length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++
    } else {
      count[arr[i]] = 1
    }
  }
  const occurrences: number[] = []
  for (let key in count) {
    if (occurrences.some((value) => value === count[key])) {
      return false
    }
    occurrences.push(count[key])
  }

  return true
}

console.log(uniqueOccurrences(arr))
