const n = 4,
  rounds = [1, 3, 1, 2]

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n: number, rounds: number[]) {
  let current = rounds[0]
  const map = new Map()
  for (let i = 1; i <= n; i++) {
    map.set(i, 0)
  }

  for (let i = 1; i < rounds.length; i++) {
    const numberOfSteps = checkSteps(current, rounds[i])
    for (let j = 0; j < numberOfSteps; j++) {
      const element = current % n === 0 ? n : current % n
      map.set(element, map.get(element) + 1)
      current++
    }
  }

  let maxCount = 0
  let result: number[] = []
  for (let [key, val] of map) {
    if (maxCount < val) {
      result = [key]
      maxCount = val
    } else if (maxCount === val) {
      result.push(key)
    }
  }

  return result.sort((a, b) => a - b)

  function checkSteps(init: number, last: number) {
    init = init % n
    if (last > init) return last - init + 1
    if (last === init) return n + 1
    return n - init + last + 1
  }
}

console.log(mostVisited(n, rounds))
