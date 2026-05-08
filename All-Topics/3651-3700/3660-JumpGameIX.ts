const nums = [2, 1, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function (nums: number[]) {
  const max: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (max?.[i - 1] === undefined || max[i - 1] < nums[i]) {
      max.push(nums[i])
    } else {
      max.push(max[i - 1])
    }
  }

  // Índices ordenados pelo valor de nums
  const sortedIdx = [...Array(nums.length).keys()].sort(
    (a, b) => nums[a] - nums[b],
  )

  // prefMaxIdx[k] = índice mais à direita entre os k+1 menores valores
  const prefMaxIdx = new Array(nums.length)
  prefMaxIdx[0] = sortedIdx[0]
  for (let k = 1; k < nums.length; k++) {
    prefMaxIdx[k] = Math.max(prefMaxIdx[k - 1], sortedIdx[k])
  }

  // Pré-computa o melhor j para cada i (substitui o loop interno O(n))
  const rj = new Array(nums.length).fill(-1)
  let ptr = 0
  for (let i = 0; i < nums.length; i++) {
    while (ptr < nums.length && nums[sortedIdx[ptr]] < max[i]) ptr++
    if (ptr > 0 && prefMaxIdx[ptr - 1] > i) rj[i] = prefMaxIdx[ptr - 1]
  }

  // Mesmo loop de resultado de antes, agora usando rj[] em O(1)
  const result = new Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    if (rj[i] !== -1) {
      result[i] = result[rj[i]]
    } else {
      result[i] = max[i]
    }
  }

  return result
}

console.log(maxValue(nums))

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var maxValue = function(nums) {

//     const max=[]
//     const min=[]

//     for(let i=0;i<nums.length;i++){
//         if(max?.[i-1]===undefined || max[i-1]<nums[i]){
//             max.push(nums[i])
//         }else{
//             max.push(max[i-1])
//         }
//     }

//     let result=new Array(nums.length)

//     for(let i=nums.length-1;i>=0;i--){
//         const current=max[i]
//         let finded=false

//         for(let j=nums.length-1;j>i;j--){
//             if(current>nums[j]){
//                 result[i] = result[j]
//                 finded=true
//                 break
//             }
//         }
//         if(!finded) result[i] = current

//     }

//     return result
// };
