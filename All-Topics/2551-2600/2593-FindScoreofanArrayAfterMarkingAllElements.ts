const nums = [2, 1, 3, 4, 5, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums: number[]) {
  //     const set=new Set()
  //     const length=nums.length
  //     let result=0

  //     while(set.size<length){

  //         let min=[1000000,0]

  //         for(let i=0;i<length;i++){
  //             if(set.has(i))continue
  //             if(min[0]>nums[i]){
  //                 min=[nums[i],i]
  //             }

  //         }
  //         result+=min[0]
  //         set.add(min[1])
  //         if((min[1]+1)<length){
  //             set.add(min[1]+1)
  //         }
  //         if((min[1]-1)>=0){
  //             set.add(min[1]-1)
  //         }

  //     }

  // return result

  const length = nums.length
  const set = new Set()
  let result = 0

  // Criar uma lista de índices ordenados pelos valores correspondentes em `nums`
  const indexedNums = nums.map((value, index) => [value, index])
  indexedNums.sort((a, b) => a[0] - b[0])

  // Processar os índices em ordem crescente de valor
  for (const [value, index] of indexedNums) {
    if (set.has(index)) continue // Ignorar se já foi processado

    result += value
    set.add(index)
    if (index + 1 < length) set.add(index + 1)
    if (index - 1 >= 0) set.add(index - 1)
  }

  return result
}

console.log(findScore(nums))
