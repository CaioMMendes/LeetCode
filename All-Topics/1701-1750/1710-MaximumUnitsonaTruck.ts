const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes: number[][], truckSize: number) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let result = 0
  let contain = 0
  let count = 0
  while (contain <= truckSize && count < boxTypes.length) {
    const dif = truckSize - contain
    if (boxTypes[count][0] <= dif) {
      contain += boxTypes[count][0]
      result += boxTypes[count][0] * boxTypes[count][1]
    } else {
      contain += dif
      result += dif * boxTypes[count][1]
    }
    count++
  }

  return result
}

console.log(maximumUnits(boxTypes, truckSize))
