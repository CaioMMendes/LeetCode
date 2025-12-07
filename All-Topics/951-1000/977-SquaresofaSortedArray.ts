const nums = [-7, -3, 2, 3, 11]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums: number[]) {
  const squares = nums.map((element) => element ** 2)
  return squares.sort((a, b) => a - b)
}

console.log(sortedSquares(nums))

//? Resolvendo com tempo de complexidade O(n)
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {

// let negatives=nums
// let positiveIndex=null

// for(let i=0;i<nums.length;i++){
//     if(nums[i]>=0){
//         negatives=nums.splice(0,i)
//         positiveIndex=i
//         break
//     }
// }

// negatives=negatives.map(val=>val**2).reverse()
// if(positiveIndex===null){
// nums=[]
// }else{
// nums=nums.map(val=>val**2)
// }

// let negativePointer=0
// let numsPointer=0
// const result=[]

// while(negativePointer!==negatives.length || numsPointer!==nums.length){
//     const negativeElement=negatives?.[negativePointer]
//     const positiveElement=nums?.[numsPointer]

//     if(positiveElement===undefined || (negativeElement<=positiveElement)){
//         result.push(negativeElement)
//         negativePointer++
//         continue
//     }

//     if(negativeElement===undefined || (positiveElement<negativeElement)){
//         result.push(positiveElement)
//         numsPointer++
//     }

// }

// return result

// };
