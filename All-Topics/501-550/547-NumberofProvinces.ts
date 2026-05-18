const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected: number[][]) {
  const visited = new Uint8Array(isConnected.length)
  let result = 0

  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === 0) {
      result++
      runNode(isConnected[i])
    }
  }

  return result

  function runNode(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1 && visited[i] === 0) {
        visited[i] = 1
        runNode(isConnected[i])
      }
    }
  }
}

console.log(findCircleNum(isConnected))
