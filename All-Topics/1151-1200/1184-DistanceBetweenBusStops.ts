const distance = [1, 2, 3, 4],
  start = 0,
  destination = 1

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (
  distance: number[],
  start: number,
  destination: number
) {
  let right = 0
  let rightStart = start
  const length = distance.length
  let left = 0
  while (rightStart !== destination) {
    right += distance[rightStart]
    rightStart = (rightStart + 1) % length
  }
  while (start !== destination) {
    left += distance[start - 1 < 0 ? length - 1 : start - 1]
    start = start - 1 < 0 ? length - 1 : start - 1
  }

  return Math.min(right, left)
}

console.log(distanceBetweenBusStops(distance, start, destination))
