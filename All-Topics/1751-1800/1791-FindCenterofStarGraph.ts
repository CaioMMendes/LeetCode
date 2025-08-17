const edges = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
]

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges: number[][]) {
  if (edges[0].includes(edges[1][0])) return edges[1][0]
  return edges[1][1]
}

console.log(findCenter)
