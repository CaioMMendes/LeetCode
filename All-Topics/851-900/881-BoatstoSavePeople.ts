const people = [
    4, 9, 3, 1, 1, 7, 6, 10, 10, 10, 1, 8, 8, 7, 8, 10, 7, 4, 6, 3, 6, 1, 2, 4,
    8, 8, 4, 7, 1, 2, 10, 3, 4, 6, 3, 5, 3, 1, 2, 6, 1, 5, 4, 5, 1, 10, 5, 9,
    10, 4,
  ],
  limit = 10

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people: number[], limit: number) {
  const count = {}
  console.log(people.length)
  let first = 0
  const stringLimit = String(limit)
  let result = 0

  people.forEach((element) => {
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
  })
  const keys = Object.keys(count)
  console.log(people)
  console.log(count)
  console.log(keys)
  let last = keys.length - 1
  for (; last >= 0; last--) {
    const element = keys[last]
    const length = count[element]
    for (let index = 0; index < length; index++) {
      if (element === stringLimit) {
        result++
        count[element]--
      } else if (Number(element) + Number(keys[first]) <= limit) {
        if (keys[first] === element) {
          if (count[element] > 1) {
            count[element] -= 2
            index++
          } else {
            count[element]--
            count[keys[first + 1]]--
            index++
          }
        } else {
          count[keys[first]]--
          count[element]--
        }
        result++
        if (count[keys[first]] <= 0) {
          first++
        }
      } else if (count[element] > 0) {
        console.log(element)
        result++
      }
    }
  }
  return result
}

console.log(numRescueBoats(people, limit))
