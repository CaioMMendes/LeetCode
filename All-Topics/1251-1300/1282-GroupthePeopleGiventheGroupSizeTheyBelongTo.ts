const groupSizes = [3, 3, 3, 3, 3, 1, 3]

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes: number[]) {
  let result: [number, number[]][] = []

  for (let i = 0; i < groupSizes.length; i++) {
    let find = false

    for (const val of result) {
      if (val[0] === groupSizes[i] && val[0] > val[1].length) {
        val[1].push(i)
        find = true
        break
      }
    }

    if (!find) {
      result.push([groupSizes[i], [i]])
    }
  }

  return result.map((cur) => cur[1])
}

console.log(groupThePeople(groupSizes))
