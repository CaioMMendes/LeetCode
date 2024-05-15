const nums = [3, 3, 3, 3, 3, 6, 0, -2, -1, 1, 2]

const threeSum = function (nums: number[]) {
  const result: number[][] = []
  const numsLength = nums.length

  if (numsLength < 3) return result

  // Ordenar o array para facilitar a manipulação dos ponteiros
  nums.sort((a, b) => a - b)

  for (let i = 0; i < numsLength - 2; i++) {
    // Pular elementos duplicados para evitar combinações repetidas
    console.log(nums[i], nums[i - 1])
    if (i > 0 && nums[i] === nums[i - 1]) continue
    console.log("continuou")
    let left = i + 1
    let right = numsLength - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Mover ponteiros para pular elementos duplicados
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

console.log(threeSum(nums))

//todo o codigo a baixo não passa nos testes de performance
// let results = ""
// const result = []
// const numsLength = nums.length

// for (let i = 0; i < numsLength - 2; i++) {
//   const elementI = nums[i]

//   for (let j = i + 1; j < numsLength - 1; j++) {
//     const elementJ = nums[j]

//     for (let k = j + 1; k < numsLength; k++) {
//       const elementK = nums[k]

//       console.log(elementI, elementJ, elementK)
//       if (elementI + elementJ + elementK === 0) {
//         const array = [elementI, elementJ, elementK].sort((a, b) => a - b)

//         if (!results.includes(`${array}`)) {
//           result.push(array)
//           results += `${array}`
//         }
//       }
//     }
//   }
// }
// return result
