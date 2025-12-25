const happiness = [1, 2, 3],
  k = 2

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness: number[], k: number) {
  const sorted = happiness.sort((a, b) => b - a)
  let result = 0

  for (let i = 0; i < k; i++) {
    const element = sorted[i] - i
    result += element > 0 ? element : 0
  }

  return result
}

console.log(maximumHappinessSum(happiness, k))
