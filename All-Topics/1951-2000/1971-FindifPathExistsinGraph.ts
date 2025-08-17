const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (
  n: number,
  edges: number[][],
  source: number,
  destination: number
) {
  const destinations = new Map()
  const alreadyVisited = new Set([source])
  if (destination === source) return true

  for (const val of edges) {
    if (destinations.get(val[0])) {
      const set = destinations.get(val[0])
      set.add(val[1])
    } else {
      destinations.set(val[0], new Set([val[1]]))
    }
    if (destinations.get(val[1])) {
      const set = destinations.get(val[1])
      set.add(val[0])
    } else {
      destinations.set(val[1], new Set([val[0]]))
    }
  }

  let result = false

  for (const val of edges) {
    if (val[0] === source) {
      let current = source
      runGraph(destinations.get(val[0]))
    }
    if (val[1] === source) {
      let current = source
      runGraph(destinations.get(val[1]))
    }
  }
  function runGraph(set: number[]) {
    for (const val of set) {
      if (val === destination) return (result = true)
      if (alreadyVisited.has(val)) continue
      alreadyVisited.add(val)
      runGraph(destinations.get(val))
    }
  }
  return result
}

console.log(validPath(n, edges, source, destination))
