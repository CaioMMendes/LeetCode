/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

const nums = [1, 3, 1, 4, 1, 3, 2],
  queries = [0, 3, 5]

var solveQueries = function (nums: number[], queries: number[]) {
  const n = nums.length
  const numsIndexes = new Map()

  for (let i = 0; i < n; i++) {
    if (!numsIndexes.has(nums[i])) {
      numsIndexes.set(nums[i], [])
    }
    numsIndexes.get(nums[i]).push(i)
  }

  const result = []

  for (const val of queries) {
    const target = nums[val]
    const indexes = numsIndexes.get(target)

    if (indexes.length === 1) {
      result.push(-1)
      continue
    }

    // busca binária por val em indexes
    let lo = 0,
      hi = indexes.length - 1
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (indexes[mid] < val) lo = mid + 1
      else hi = mid
    }
    const pos = lo // posição de val em indexes

    const prev = indexes[(pos - 1 + indexes.length) % indexes.length]
    const next = indexes[(pos + 1) % indexes.length]

    // distância circular
    const distPrev = Math.min(Math.abs(val - prev), n - Math.abs(val - prev))
    const distNext = Math.min(Math.abs(val - next), n - Math.abs(val - next))

    result.push(Math.min(distPrev, distNext))
  }

  return result
}

console.log(solveQueries(nums, queries))

// ? Meu codigo não passava na performance

// var solveQueries = function(nums, queries) {
//      const numsIndexes=new Map()

//     for(let i=0;i<nums.length;i++){
//         const element=nums[i]
//         if(numsIndexes.has(element)){
//             numsIndexes.get(element).push(i)
//         }else{
//             numsIndexes.set(element,[i])
//         }
//     }

//     const result=[]

//     for(const val of queries){
//         const target=nums[val]
//         const indexes=numsIndexes.get(target)

//         if(indexes.length===1){
//             result.push(-1)
//             continue
//         }

//         let min=null

//         for(const index of indexes){
//             if(index===val)continue
//             let dif=Math.abs(val-index)
//             const difAround=nums.length-dif
//             if(difAround<dif)dif=difAround

//             if(min===null||dif<min){
//                 min=dif
//             }
//         }
//         result.push(min)

//     }

//     return result

// };
