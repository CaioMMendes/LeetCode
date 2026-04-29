const nums = [12, 21, 45, 33, 54]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums: number[]) {
  const indexes = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (indexes.has(num)) {
      indexes.get(num).push(i)
    } else {
      indexes.set(num, [i])
    }

    const invertedNum = Number(String(num).split("").reverse().join(""))

    if (indexes.has(invertedNum)) {
      indexes.get(invertedNum).push([i, true])
    } else {
      indexes.set(invertedNum, [[i, true]])
    }
  }

  let min = -1

  for (const [key, arr] of indexes) {
    for (let i = 1; i < arr.length; i++) {
      const first = arr[i - 1]?.[1] === true ? arr[i - 1]?.[0] : arr[i - 1]
      const second = arr[i]?.[1] === true ? arr[i]?.[0] : arr[i]
      if (first === second) continue
      if (arr[i - 1]?.[1] !== true && arr[i]?.[1] !== true) continue
      if (first < second && arr[i]?.[1] === true) continue

      const dif = second - first
      if (min === -1 || min > dif) {
        min = dif
      }
    }
  }

  return min
}

console.log(minMirrorPairDistance(nums))
