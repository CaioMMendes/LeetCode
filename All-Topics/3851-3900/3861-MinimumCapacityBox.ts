const capacity = [1, 5, 3, 7],
  itemSize = 3

/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity: number[], itemSize: number) {
  let result = -1

  for (let i = 0; i < capacity.length; i++) {
    if (
      capacity[i] >= itemSize &&
      capacity[i] < (capacity?.[result] ?? Infinity)
    ) {
      result = i
    }
  }

  return result
}

console.log(minimumIndex(capacity, itemSize))
