const houses = [1, 2, 3],
  heaters = [2]

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses: number[], heaters: number[]) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)

  let result = 0
  let heatersIndex = 0

  function goToIndex(i: number) {
    while (
      houses[i] > heaters[heatersIndex] &&
      heatersIndex < heaters.length - 1
    ) {
      heatersIndex++
    }
  }

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i]
    goToIndex(i)

    let left = +Infinity
    let right = +Infinity
    if (heaters[heatersIndex - 1]) {
      left = Math.abs((heaters[heatersIndex - 1] ?? 0) - house)
    }
    if (heaters[heatersIndex]) {
      right = Math.abs((heaters[heatersIndex] ?? 0) - house)
    }

    const min = Math.min(left, right)

    if (min > result) result = min
  }

  return result
}

console.log(findRadius(houses, heaters))
