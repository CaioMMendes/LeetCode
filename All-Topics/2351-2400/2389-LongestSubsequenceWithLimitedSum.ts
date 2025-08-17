const nums = [4, 5, 2, 1],
  queries = [3, 10, 21]

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums: number[], queries: number[]) {
  const result = []

  const sorted = nums.sort((a, b) => a - b)
  const check = []
  let sum = 0
  for (const val of sorted) {
    sum += val
    check.push(sum)
  }

  for (const val of queries) {
    let pass = true
    for (let i = check.length; i > 0; i--) {
      if (val >= check[i - 1]) {
        result.push(i)
        pass = false
        break
      }
    }
    if (pass) result.push(0)
  }

  return result
}
console.log(answerQueries(nums, queries))
