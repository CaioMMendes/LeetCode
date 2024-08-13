// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const arr = [1, 3, 2]
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr: number[]) {
  let increasing = arr[1] > arr[0]
  if (!increasing) return false
  const arrLength = arr.length
  if (arrLength < 3) {
    return false
  }
  for (let i = 0; i < arrLength; i++) {
    const number = arr[i]
    if (i === 0) continue
    if (increasing === true) {
      if (number > arr[i - 1]) continue
      increasing = false
      if (i === arrLength - 1 && number < arr[i - 1]) return true
    } else {
      if (number < arr[i - 1]) {
        if (i === arrLength - 1) return true
      } else {
        return false
      }
    }
  }
  return false
}

console.log(validMountainArray(arr))
