const answers = [1, 1, 1, 1]

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers: number[]) {
  const count: Record<string, number> = {}

  for (const val of answers) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let result = 0

  for (const key in count) {
    const number = Number(key)
    const val = count[key]
    const groups = Math.ceil(val / (number + 1))
    result += groups * (number + 1)
  }

  return result
}

console.log(numRabbits(answers))
