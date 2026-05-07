const landStartTime = [2, 8],
  landDuration = [4, 1],
  waterStartTime = [6],
  waterDuration = [3]

/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
) {
  let result = +Infinity

  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterStartTime.length; j++) {
      const landFirst = landStartTime[i] + landDuration[i]
      const finishWithLandFirst =
        Math.max(landFirst, waterStartTime[j]) + waterDuration[j]

      const waterFirst = waterStartTime[j] + waterDuration[j]
      const finishWithWaterFirst =
        Math.max(waterFirst, landStartTime[i]) + landDuration[i]

      const min = Math.min(finishWithWaterFirst, finishWithLandFirst)
      if (result > min) {
        result = min
      }
    }
  }

  return result
}

console.log(
  earliestFinishTime(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration,
  ),
)
