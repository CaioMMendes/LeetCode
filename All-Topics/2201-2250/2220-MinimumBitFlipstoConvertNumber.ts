const start = 10,
  goal = 7

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start: number, goal: number) {
  const biStart = start.toString(2).padStart(64, "0")
  const biGoal = goal.toString(2).padStart(64, "0")
  let result = 0

  for (let i = 0; i < biGoal.length; i++) {
    if (biGoal[i] !== biStart[i]) {
      result++
    }
  }

  return result
}

console.log(minBitFlips(start, goal))
