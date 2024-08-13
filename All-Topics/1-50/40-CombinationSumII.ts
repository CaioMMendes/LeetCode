// const candidates = [10, 1, 2, 7],
const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8
console.log("-------------------")
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates: number[], target: number) {
  candidates.sort((a, b) => a - b)
  const result: number[][] = []

  const backtrack = (
    start: number,
    currentCombination: number[],
    currentSum: number
  ) => {
    if (currentSum === target) {
      result.push([...currentCombination])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue // Evita duplicatas

      if (currentSum + candidates[i] > target) break

      currentCombination.push(candidates[i])
      backtrack(i + 1, currentCombination, currentSum + candidates[i])
      currentCombination.pop()
    }
  }

  backtrack(0, [], 0)
  return result
}

console.log(combinationSum2(candidates, target))

// // const candidates = [10, 1, 2, 7],
// const candidates = [10, 1, 2, 7, 6, 1, 5],
//   target = 8
// console.log("-------------------")
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates: number[], target: number) {
//   const result: number[][] = [[]]
//   const sum: number[] = [0]
//   const already = {}

//   for (let i = 0; i < candidates.length; i++) {
//     const currentElement = candidates[i]
//     const combinationsLength = result.length
//     // if(sum>target)continue

//     for (let j = 0; j < combinationsLength; j++) {
//       // console.log(sum[j], currentElement)
//       const tempSum = sum[j] + currentElement
//       // console.log("tempSum", tempSum, sum[j], currentElement)
//       if (tempSum <= target) {
//         sum.push(tempSum)
//         const combination: number[] = result[j].concat(currentElement)
//         result.push(combination)
//       }
//     }
//   }
//   const cleanSum = sum.slice(1)
//   const cleanResult = result.slice(1)
//   console.log(cleanSum)
//   const response = []

//   for (let i = 0; i < cleanSum.length; i++) {
//     if (cleanSum[i] === target) {
//       const order = cleanResult[i].sort((a, b) => a - b)

//       if (!already[`${order}`]) {
//         already[`${order}`] = true
//         response.push(cleanResult[i])
//       }
//     }
//   }

//   return response
// }

// console.log(combinationSum2(candidates, target))
