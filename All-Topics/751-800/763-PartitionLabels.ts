const s = "caedbdedda"

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s: string) {
  const parts: Record<string, number[]> = {}
  const intervals = []
  const used = new Set()

  for (let i = 0; i < s.length; i++) {
    if (parts[s[i]]) {
      parts[s[i]][1] = i
    } else {
      parts[s[i]] = [i]
    }
  }

  const keys = Object.keys(parts)

  let currentInterval = null

  while (used.size < keys.length) {
    for (const key in parts) {
      if (used.has(key)) continue

      if (parts[key]?.[1] === undefined) {
        parts[key] = [parts[key][0], parts[key][0]]
      }

      if (currentInterval === null) {
        currentInterval = parts[key]
        used.add(key)
        continue
      }

      if (
        currentInterval[0] < parts[key][1] &&
        currentInterval[1] > parts[key][0]
      ) {
        const min = Math.min(currentInterval[0], parts[key][0])
        const max = Math.max(currentInterval[1], parts[key][1])
        currentInterval = [min, max]
        used.add(key)
        continue
      }
    }

    if (currentInterval) {
      intervals.push(currentInterval[1] - currentInterval[0] + 1)
      currentInterval = null
    }
  }

  return intervals
}

console.log(partitionLabels(s))
