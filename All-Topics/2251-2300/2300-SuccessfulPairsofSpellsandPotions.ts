const spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5],
  success = 7

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (
  spells: number[],
  potions: number[],
  success: number
) {
  const sorted = potions.sort((a, b) => a - b)
  let result = []

  for (const val of spells) {
    let left = 0
    let right = sorted.length - 1
    let idx = sorted.length // caso não ache nenhum válido

    // busca binária
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (val * sorted[mid] >= success) {
        idx = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    result.push(sorted.length - idx)
  }

  return result
}

console.log(successfulPairs(spells, potions, success))

//? Falhava na performance
// var successfulPairs = function(spells, potions, success) {
//     const sorted=potions.sort((a,b)=>a-b)
//     let result=[]

//     for(const val of spells){
//         let current=0
//         for(let i=0;i<sorted.length;i++){
//             if(val*sorted[i]>=success){
//                 current+=sorted.length-i
//                 break
//             }
//         }
//         result.push(current)
//     }

//     return result
// };
