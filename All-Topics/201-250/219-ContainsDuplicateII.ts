const nums = [99, 1, 99],
  k = 2
console.log("--------------------")
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums: number[], k: number) {
  //todo se o numero[i]===numero[j] e i-j<=k retorna true

  let numbers = {}
  if ([...new Set(nums)].length === nums.length) {
    return false
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]

    if (numbers[element]) {
      numbers = { ...numbers, [element]: [...numbers[element], index] }
    } else {
      numbers = { ...numbers, [element]: [index] }
    }
  }

  for (let key in numbers) {
    const element = numbers[key]
    const length = element.length
    if (length > 1) {
      console.log(element)
      for (let index = 0; index < length - 1; index++) {
        const elementIndex = element[index]
        const nextElementIndex = element[index + 1]
        if (nextElementIndex - elementIndex <= k) {
          return true
        }
      }
    }
  }

  return false
}

console.log(containsNearbyDuplicate(nums, k))
//todo se tiver 2 iguais retorna true, se não false

// var containsNearbyDuplicate = function (nums: number[], k: number) {
//   //todo se o numero[i]===numero[j] e i-j<=k retorna true

//   const length = nums.length
//   const numbersAccepted = Math.abs(length - k)

//   if (nums.length - 1 <= k) {
//     const tempNums = nums.slice()
//     const seted = [...new Set(tempNums)]
//     return tempNums.length !== seted.length
//   }

//   for (let index = 1; index <= nums.length - k; index++) {
//     const tempNums = nums.slice()
//     const spliced = tempNums.splice(
//       numbersAccepted - index < 0 ? 0 : numbersAccepted - index,
//       k + 1
//     )
//     const seted = [...new Set(spliced)]
//     console.log(numbersAccepted - 1 - index, length - index, index)
//     console.log(spliced)
//     console.log(seted)
//     if (spliced.length !== seted.length) return true
//   }
//   return false
// }
