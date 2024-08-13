const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1: number[], arr2: number[]) {
  const arrToSort: number[] = []
  const numbers = {}
  const arr1Length = arr1.length
  const arr2Length = arr2.length

  for (let i = 0; i < arr1Length; i++) {
    if (arr2.includes(arr1[i])) {
      if (numbers[arr1[i]]) {
        numbers[arr1[i]]++
      } else {
        numbers[arr1[i]] = 1
      }
    } else {
      arrToSort.push(arr1[i])
    }
  }

  arrToSort.sort((a, b) => a - b)
  const newArray: number[] = []

  for (let i = 0; i < arr2Length; i++) {
    const repeat = numbers[arr2[i]]
    for (let j = 0; j < repeat; j++) {
      newArray.push(arr2[i])
    }
  }

  return [...newArray, ...arrToSort]
}

console.log(relativeSortArray(arr1, arr2))
