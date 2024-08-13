const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates: number[], target: number) {
  const result: number[][] = []

  function generateCombination(subset: number[], index: number, sum: number) {
    console.log(sum)
    if (index === candidates.length) {
      if (sum > target) {
        return
      }
      if (subset.length > 0 && target === sum) {
        result.push(subset)
      }
      return
    }
    // console.log(subset, candidates[index])
    // Inclui o elemento atual no subset
    generateCombination(
      [...subset, candidates[index]],
      index + 1,
      sum + candidates[index]
    )

    // Não inclui o elemento atual no subset
    generateCombination(subset, index + 1, sum + candidates[index])
  }

  generateCombination([], 0, 0)
  return result
}

console.log(combinationSum2(candidates, target))
