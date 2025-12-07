const prices = [7, 6, 4, 3, 1]

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]) => {
  let min = prices[0]
  let result = 0

  for (let index = 0; index < prices.length; index++) {
    const element = prices[index]
    const difference = element - min
    if (difference < 0) {
      min = element
    } else {
      if (difference > result) {
        result = difference
      }
    }
  }

  return result
}

console.log(maxProfit(prices))

//? Outra solução usando ponteiros
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {

//     let result=0

//     let left=0
//     let right=1

//     while(right!==prices.length){
//         const leftPrice=prices[left]
//         const rightPrice=prices[right]
//         if(rightPrice<leftPrice){
//             left=right
//             right=left+1
//             continue
//         }
//         result=Math.max((rightPrice-leftPrice),result)
//         right++

//     }

// return result

// };
