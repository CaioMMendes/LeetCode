const graph = [[1, 2], [3], [3], []]

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph: number[][]) {
  const length = graph.length - 1

  const result: number[][] = []

  runPaths(graph[0], [], 0)

  function runPaths(arr: number[], currentArr: number[], cur: number) {
    if (cur === length) {
      result.push([...currentArr, cur])
      return
    }

    for (const val of arr) {
      runPaths(graph[val], [...currentArr, cur], val)
    }
  }

  return result
}

console.log(allPathsSourceTarget(graph))
