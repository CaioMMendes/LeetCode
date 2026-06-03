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
  let minLandFinish = +Infinity
  for (let i = 0; i < landStartTime.length; i++) {
    const finish = landStartTime[i] + landDuration[i]
    if (finish < minLandFinish) {
      minLandFinish = finish
    }
  }

  let minWaterFinish = +Infinity
  for (let j = 0; j < waterStartTime.length; j++) {
    const finish = waterStartTime[j] + waterDuration[j]
    if (finish < minWaterFinish) {
      minWaterFinish = finish
    }
  }

  let result = +Infinity

  // land primeiro: termina no land mais cedo possível, depois faz o water
  for (let j = 0; j < waterStartTime.length; j++) {
    const f = Math.max(minLandFinish, waterStartTime[j]) + waterDuration[j]
    if (f < result) result = f
  }

  // water primeiro: termina no water mais cedo possível, depois faz o land
  for (let i = 0; i < landStartTime.length; i++) {
    const f = Math.max(minWaterFinish, landStartTime[i]) + landDuration[i]
    if (f < result) result = f
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
