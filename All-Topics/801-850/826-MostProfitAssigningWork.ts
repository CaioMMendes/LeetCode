const difficulty = [2, 4, 6, 2, 8, 10],
  profit = [10, 20, 30, 40, 40, 50],
  worker = [4, 5, 6, 7]

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (
  difficulty: number[],
  profit: number[],
  worker: number[]
) {
  const jobs: number[][] = []
  for (let i = 0; i < difficulty.length; i++) {
    jobs.push([difficulty[i], profit[i]])
  }

  // Ordena os trabalhos pela dificuldade e, em caso de empate, pelo lucro
  jobs.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  console.log(jobs)
  // Ordena os trabalhadores pela sua capacidade
  worker.sort((a, b) => a - b)

  let maxProfit = 0
  let jobIndex = 0
  let bestProfit = 0

  // Para cada trabalhador, encontre o trabalho mais lucrativo que ele pode realizar
  for (let i = 0; i < worker.length; i++) {
    console.log(maxProfit, jobIndex, bestProfit)
    console.log("job", worker[i], jobs[jobIndex][0])
    while (jobIndex < jobs.length && worker[i] >= jobs[jobIndex][0]) {
      bestProfit = Math.max(bestProfit, jobs[jobIndex][1])
      jobIndex++
    }
    maxProfit += bestProfit
  }

  return maxProfit
}

console.log(maxProfitAssignment(difficulty, profit, worker))

// const best = {}
// const length = difficulty.length
// const workerLength = worker.length
// let result = 0

// for (let i = 0; i < length; i++) {
//   if (best[profit[i]]) {
//     if (best[profit[i]] > difficulty[i]) {
//       best[profit[i]] = difficulty[i]
//       continue
//     }
//     continue
//   } else {
//     best[profit[i]] = difficulty[i]
//   }
// }
// const bestKeys = Object.keys(best).reverse()
// const bestLength = bestKeys.length
// console.log(bestKeys)

// for (let index = 0; index < workerLength; index++) {
//   for (let i = 0; i < bestLength; i++) {
//     if (worker[index] >= best[bestKeys[i]]) {
//       result += Number(bestKeys[i])
//       break
//     }
//   }
// }

// return result
