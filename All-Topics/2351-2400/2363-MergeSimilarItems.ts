const items1 = [
    [1, 1],
    [4, 5],
    [3, 8],
  ],
  items2 = [
    [3, 1],
    [1, 5],
  ]

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1: number[][], items2: number[][]) {
  const map = new Map()
  for (let i = 0; i < items1.length; i++) {
    map.set(items1[i][0], items1[i][1])
  }

  for (let i = 0; i < items2.length; i++) {
    const element = items2[i]
    if (map.has(element[0])) {
      map.set(element[0], map.get(element[0]) + element[1])
    } else {
      map.set(element[0], element[1])
    }
  }

  return Array.from(map).sort((a, b) => a[0] - b[0])
}

console.log(mergeSimilarItems(items1, items2))
