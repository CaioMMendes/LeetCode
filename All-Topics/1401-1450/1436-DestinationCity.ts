const paths = [
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
]

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths: string[][]) {
  const destiny = {}
  const origin = {}

  const length = paths.length

  for (let i = 0; i < length; i++) {
    if (origin[paths[i][0]]) {
      origin[paths[i][0]]++
    } else {
      origin[paths[i][0]] = 1
    }
    if (destiny[paths[i][1]]) {
      destiny[paths[i][1]]++
    } else {
      destiny[paths[i][1]] = 1
    }
  }

  for (const key in destiny) {
    const numberOfTimes = destiny[key]
    for (let index = 0; index < numberOfTimes; index++) {
      if (origin[key] <= 0 || !origin[key]) {
        return key
      }
      origin[key]--
    }
  }
}

console.log(destCity(paths))
