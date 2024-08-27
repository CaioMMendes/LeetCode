const candidates = [10, 1, 2, 7],
  // const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8
console.log("-------------------")
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [[]]

  for (let i = 0; i < candidates.length; i++) {
    const currentElement = candidates[i]
    const combinationsLength = result.length

    for (let j = 0; j < combinationsLength; j++) {
      const combination = result[j].concat(currentElement)
      result.push(combination)
    }
  }

  return result.slice(1) // remove a combinação vazia []
}

console.log(combinationSum2(candidates, target))

// const candidates = [10, 1, 2, 7],
//   // const candidates = [10, 1, 2, 7, 6, 1, 5],
//   target = 8
// console.log("-------------------")
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates, target) {
//   const result = []

//   function generateCombination(subset, index, sum) {
//     console.log(subset, sum, index)
//     if (sum > target) {
//       subset.shift()
//     }
//     if (index === candidates.length) {
//       if (subset.length > 0) {
//         result.push(subset)
//       }
//       return
//     }
//     // Inclui o elemento atual no subset
//     generateCombination(
//       [...subset, candidates[index]],
//       index + 1,
//       sum + candidates[index]
//     )

//     // Não inclui o elemento atual no subset
//     generateCombination(subset, index + 1, sum + candidates[index])
//   }

//   generateCombination([], 0, 0)
//   return result
// }

// console.log(combinationSum2(candidates, target))
