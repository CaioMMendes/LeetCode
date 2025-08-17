const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
]

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs: number[][]) {
  const years: Record<string, number> = {}

  for (let i = 1950; i <= 2050; i++) {
    years[i] = 0
  }

  for (let i = 0; i < logs.length; i++) {
    for (let j = logs[i][0]; j < logs[i][1]; j++) {
      years[j]++
    }
  }

  let result = 0
  let value = 0
  for (const key in years) {
    if (years[key] > value) {
      result = Number(key)
      value = years[key]
    }
  }

  return result
}

console.log(logs)
