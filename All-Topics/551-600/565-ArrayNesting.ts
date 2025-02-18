const nums = [5, 4, 0, 3, 1, 6, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums: number[]) {
  // let max=0
  // for(let i=0;i<nums.length;i++){

  // const set=new Set()
  // let current=i
  // while(!set.has(nums[current])){
  //     set.add(nums[current])
  //     current=nums[current]
  // }

  // if(max<set.size)max= set.size
  // }

  // return max

  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) continue // Se já foi visitado, pula

    let count = 0
    let current = i

    while (nums[current] !== -1) {
      let next = nums[current] // Guarda o próximo índice antes de modificar
      nums[current] = -1 // Marca como visitado
      current = next
      count++
    }

    max = Math.max(max, count)
  }

  return max
}

console.log(arrayNesting(nums))
