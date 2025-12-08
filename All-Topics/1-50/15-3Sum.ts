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

//? Fiz com ajuda do video do stoney code, só não consegui entender muito bem a parte das duplicatas, essa parte fiz com ajuda do gpt
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {

//     const sorted=nums.sort((a,b)=>a-b)
//     const result=[]

//     for(let i=0;i<(nums.length-2);i++){
//         if(nums[i]>0)return result
//         if(nums?.[i-1]===nums[i])continue

//         let left=i+1

//         let right=nums.length-1

//         while(left<right){
//             const leftVal=nums[left]
//             const rightVal=nums[right]
//             const sum = nums[i] + leftVal + rightVal

//             if(sum === 0){
//                 result.push([nums[i], leftVal, rightVal])
//                 right--

//                 // pular duplicatas
//                 while(left < right && nums[left] === nums[left-1]) left++
//                 while(left < right && nums[right] === nums[right+1]) right--
//             }else if(sum<0){
//                 left+=1
//             }else{
//                 right-=1
//             }
//         }

//     }

//     return result

// };
