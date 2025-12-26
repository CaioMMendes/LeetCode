const n = 13

/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n: number) {
  const hexMap = new Map([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "4"],
    [5, "5"],
    [6, "6"],
    [7, "7"],
    [8, "8"],
    [9, "9"],
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"],
  ])

  const base36Map = new Map([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "4"],
    [5, "5"],
    [6, "6"],
    [7, "7"],
    [8, "8"],
    [9, "9"],
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"],
    [16, "G"],
    [17, "H"],
    [18, "I"],
    [19, "J"],
    [20, "K"],
    [21, "L"],
    [22, "M"],
    [23, "N"],
    [24, "O"],
    [25, "P"],
    [26, "Q"],
    [27, "R"],
    [28, "S"],
    [29, "T"],
    [30, "U"],
    [31, "V"],
    [32, "W"],
    [33, "X"],
    [34, "Y"],
    [35, "Z"],
  ])

  let n2 = n * n
  let n3 = n * n * n

  let maxn2 = 1
  let maxn3 = 1
  let count = 1

  while (maxn2 <= n2) {
    const temp = 16 ** count
    if (temp <= n2) {
      maxn2 = temp
    } else break
    count++
  }

  count = 1
  while (maxn3 <= n3) {
    const temp = 36 ** count
    if (temp <= n3) {
      maxn3 = temp
    } else break
    count++
  }

  let result = ""

  while (maxn2 >= 1) {
    const div = Math.floor(n2 / maxn2)
    n2 = n2 % maxn2
    maxn2 /= 16
    result += hexMap.get(div)
  }

  while (maxn3 >= 1) {
    const div = Math.floor(n3 / maxn3)
    n3 = n3 % maxn3
    maxn3 /= 36
    result += base36Map.get(div)
  }

  return result
}

console.log(concatHex36(n))
