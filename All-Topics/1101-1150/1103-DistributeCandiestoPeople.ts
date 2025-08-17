const candies = 7,
  num_people = 4

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies: number, num_people: number) {
  let count = 1
  const result = Array(num_people).fill(0)

  while (candies > 0) {
    if (count > candies) {
      result[(count - 1) % num_people] += candies
      break
    }

    result[(count - 1) % num_people] += count
    candies -= count
    count++
  }
  return result
}

console.log(distributeCandies(candies, num_people))
