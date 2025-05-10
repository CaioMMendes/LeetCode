const nums = [4, 6, 1, 2],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums: number[], k: number) {
  // const obj={}

  // for(let i=0;i<nums.length;i++){
  //     const element=nums[i]
  //     if(obj[element]){
  //         obj[element]++
  //     }else{
  //         obj[element]=1
  //     }
  //     for(let j=0;j<k;j++){

  //     if(obj[element-j-1]){
  //         obj[element-j-1]++
  //     }else{
  //         obj[element-j-1]=1
  //     }

  //     if(obj[element+j+1]){
  //         obj[element+j+1]++
  //     }else{
  //         obj[element+j+1]=1
  //     }

  //     }

  // }

  // return Math.max(...Object.values(obj))

  const freq: Record<string, number> = {}

  // Marcar os intervalos afetados por cada número
  for (const num of nums) {
    const start = num - k
    const end = num + k

    freq[start] = (freq[start] || 0) + 1 // Início do intervalo
    freq[end + 1] = (freq[end + 1] || 0) - 1 // Fim do intervalo
  }

  // Calcular a beleza máxima usando um contador acumulativo
  let maxBeauty = 0
  let currentBeauty = 0
  for (const key of Object.keys(freq).sort((a, b) => Number(a) - Number(b))) {
    currentBeauty += freq[key]
    maxBeauty = Math.max(maxBeauty, currentBeauty)
  }

  return maxBeauty
}

console.log(maximumBeauty(nums, k))
