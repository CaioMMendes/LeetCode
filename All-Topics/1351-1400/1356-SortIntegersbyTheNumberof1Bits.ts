const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr: number[]) {
  const map = new Map()
  const count: Record<string, number> = {}

  arr.forEach((val) => {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  })

  arr.forEach((val) => {
    const ones = val.toString(2).match(/1/g)?.length
    map.set(val, ones ?? 0)
  })

  const sorted: number[][] = Array.from(map).sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  return sorted.flatMap((val: number[]) => {
    return Array.from({ length: count[val[0]] }, () => val[0])
  })
}

console.log(sortByBits(arr))
