const numbers = [2, 7, 11, 15],
  target = 9

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers: number[], target: number) {
  const length = numbers.length

  for (let i = 0; i < length; i++) {
    const firstElement = numbers[i]

    for (let j = i + 1; j < length; j++) {
      const secondElement = numbers[j]
      if (firstElement + secondElement > target) break
      if (firstElement + secondElement === target) {
        return [i + 1, j + 1]
      }
    }
  }
}

console.log(twoSum(numbers, target))
