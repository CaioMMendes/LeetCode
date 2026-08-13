//@ts-nocheck

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const array = []

  for (let i = 1; i <= n; i++) {
    array.push(i)
  }

  const memo = {}

  return makeTree(array)

  function makeTree(array) {
    if (array.length === 0) return 1
    if (memo[array.length] !== undefined) return memo[array.length]
    let total = 0

    for (let i = 0; i < array.length; i++) {
      const left = array.slice(0, i)
      const right = array.slice(i + 1, array.length)

      const countLeft = makeTree(left)
      const countRight = makeTree(right)

      total += countRight * countLeft
    }

    memo[array.length] = total
    return total
  }
}
