const drones = [
    [0, 0, 8],
    [2, 2, 9],
  ],
  target = [3, 4]

/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function (drones: number[][], target: number[]) {
  let result = [+Infinity, 0]
  let i = 0
  for (const drone of drones) {
    i++
    const distance =
      Math.abs(drone[0] - target[0]) + Math.abs(drone[1] - target[1])
    if (distance > drone[2] || distance >= result[0]) continue
    result = [distance, i - 1]
  }

  return result[0] === +Infinity ? -1 : result[1]
}

console.log(nearestDrone(drones, target))
