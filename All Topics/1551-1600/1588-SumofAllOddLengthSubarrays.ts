const arr = [1, 4, 2, 5, 3]

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr: number[]) {
  let sum = 0
  const arrLength = arr.length

  for (let index = 1; index <= arrLength; index += 2) {
    const times = arrLength - index + 1
    for (let j = 0; j < times; j++) {
      const array = arr.slice(j, index + j)
      sum += array.reduce((acc, cur) => acc + cur, 0)
    }
  }

  return sum
}

console.log(sumOddLengthSubarrays(arr))
