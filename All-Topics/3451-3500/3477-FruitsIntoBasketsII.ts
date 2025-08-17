const fruits = [4, 2, 5],
  baskets = [3, 5, 4]

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits: number[], baskets: number[]) {
  const basket = new Set()
  let count = 0

  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (basket.has(j)) continue
      if (fruits[i] <= baskets[j]) {
        basket.add(j)
        count++
        break
      }
    }
  }

  return fruits.length - count
}

console.log(numOfUnplacedFruits(fruits, baskets))
