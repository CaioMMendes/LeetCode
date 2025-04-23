const n = 10000

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n: number) {
  const map = new Map()

  for (let i = 1; i <= n; i++) {
    const string = String(i)
    let sum = 0
    for (let j = 0; j < string.length; j++) {
      sum += Number(string[j])
    }
    if (map.get(sum)) {
      map.set(sum, [...map.get(sum), i])
    } else {
      map.set(sum, [i])
    }
  }
  let large = 0
  let count = 0

  for (let [key, val] of map) {
    const length = val.length
    if (length > large) {
      large = length
      count = 1
    } else if (length === large) {
      count++
    }
  }

  return count
}

console.log(countLargestGroup(n))
