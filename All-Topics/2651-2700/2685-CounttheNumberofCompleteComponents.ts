const n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ]

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n: number, edges: number[][]) {
  const components = new Map()
  let count = 1

  for (const val of edges) {
    searchComponents(val)
  }

  const countVertices = new Map()
  const countNodes = new Map()

  for (const [key, val] of components) {
    countVertices.set(key, 0)
    countNodes.set(key, val.size)
  }

  for (const val of edges) {
    for (const [key, component] of components) {
      if (component.has(val[0]) && component.has(val[1])) {
        countVertices.set(key, countVertices.get(key) + 1)
      }
    }
  }

  let total = 0
  let result = 0

  for (const [key, val] of components) {
    const nodes = countNodes.get(key)
    const vertices = countVertices.get(key)

    total += val.size

    if (vertices === (nodes * (nodes - 1)) / 2) result++
  }

  result += n - total

  return result

  function searchComponents(edge: number[]) {
    let finded = 0

    for (const [key, val] of components) {
      if (val.has(edge[0]) || val.has(edge[1])) {
        if (finded) {
          const first = components.get(finded)
          for (const v of val) first.add(v)
          components.delete(key)
        } else {
          val.add(edge[0])
          val.add(edge[1])
          finded = key
        }
      }
    }
    if (!finded) {
      components.set(count, new Set([...edge]))
      count++
    }
  }
}

console.log(countCompleteComponents(n, edges))
