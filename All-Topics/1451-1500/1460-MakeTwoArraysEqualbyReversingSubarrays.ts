const target = [1, 2, 3, 4],
  arr = [2, 4, 1, 3]

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target: number[], arr: number[]) {
  const count1 = {}
  const count2 = {}

  const length1 = target.length

  for (let i = 0; i < length1; i++) {
    if (count1[target[i]]) {
      count1[target[i]]++
    } else {
      count1[target[i]] = 1
    }
    if (count2[arr[i]]) {
      count2[arr[i]]++
    } else {
      count2[arr[i]] = 1
    }
  }

  const keys1 = Object.keys(count1)
  const keys2 = Object.keys(count2)

  if (keys1.length !== keys2.length) return false

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false
  }

  return true
}

console.log(canBeEqual(target, arr))
