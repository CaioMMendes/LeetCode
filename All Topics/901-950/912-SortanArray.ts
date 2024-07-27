const nums = [5, 1, 1, 2, 0, 0, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums: number[]) {
  function mergeSort(array: number[]) {
    if (array.length === 1) return array
    const [first, second] = numSplit(array)

    const array1 = mergeSort(first)
    const array2 = mergeSort(second)
    return merge(array1, array2)
  }

  function numSplit(numbers: number[]) {
    const length = numbers.length
    const half = Math.floor(length / 2)

    const first = numbers.slice(0, half)
    const second = numbers.slice(half, length)

    return [first, second]
  }

  function merge(rightArray: number[], leftArray: number[]) {
    let result: number[] = []
    let left = 0
    let right = 0

    const leftArrayLength = leftArray.length
    const rightArrayLength = rightArray.length
    const length = leftArrayLength + rightArrayLength

    for (let index = 0; index < length; index++) {
      if (leftArray[left] < rightArray[right]) {
        result.push(leftArray[left])
        if (left === leftArrayLength - 1) {
          result = result.concat(rightArray.slice(right, rightArrayLength))
          break
        }
        left++
      } else {
        result.push(rightArray[right])
        if (right === rightArrayLength - 1) {
          result = result.concat(leftArray.slice(left, leftArrayLength))
          break
        }
        right++
      }
    }
    return result
  }

  return mergeSort(nums)
}

console.log(sortArray(nums))
