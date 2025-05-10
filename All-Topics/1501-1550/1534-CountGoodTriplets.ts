const arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (
  arr: number[],
  a: number,
  b: number,
  c: number
) {
  let result = 0

  for (let i = 0; arr.length - 2 > i; i++) {
    for (let j = i + 1; arr.length - 1 > j; j++) {
      const first = Math.abs(arr[i] - arr[j])
      if (first > a) continue

      for (let k = j + 1; arr.length > k; k++) {
        const second = Math.abs(arr[j] - arr[k])
        const third = Math.abs(arr[i] - arr[k])
        if (second > b || third > c) continue

        result++
      }
    }
  }

  return result
}

console.log(countGoodTriplets(arr, a, b, c))
