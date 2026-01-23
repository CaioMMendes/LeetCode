const candidates = [2, 3, 6, 7],
  target = 7

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates: number[], target: number) {
  let result: number[][] = []

  combination([], 0, 0)

  return result

  function combination(array: number[], sum: number, last: number) {
    if (sum > target) return

    if (sum === target) {
      result.push(array)
      return
    }

    for (const val of candidates) {
      if (val < last) continue
      combination([...array, val], sum + val, val)
    }
  }
}

console.log(combinationSum(candidates, target))
