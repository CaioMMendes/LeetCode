const arr = [1, 3, 6, 10, 15]

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr: number[]) {
  const set = new Set<number>()
  const arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i])
    }
  }
  const array = [...set].sort((a, b) => a - b)
  const arrayLength = array.length
  let result: number[][] = []
  let min = +Infinity

  for (let i = 1; i < arrayLength; i++) {
    const dif = array[i] - array[i - 1]
    if (dif < min) {
      result = [[array[i - 1], array[i]]]
      min = dif
    } else if (dif === min) {
      result.push([array[i - 1], array[i]])
    }
  }

  return result
}

console.log(minimumAbsDifference(arr))
