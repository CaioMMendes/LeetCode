const s = "xyzzaz"

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s: string) {
  const map = new Map()

  let result = 0
  map.set(s?.[0], map.get(s?.[0]) ?? 0 + 1)
  map.set(s?.[1] ?? s?.[1], (map.get(s?.[1]) ?? 0) + 1)
  map.set(s?.[2] ?? s?.[2], (map.get(s?.[2]) ?? 0) + 1)
  if ([...map].length === 3) result++
  for (let i = 3; i < s.length; i++) {
    map.set(s[i], (map.get(s?.[i]) ?? 0) + 1)
    map.set(s[i - 3], (map.get(s?.[i - 3]) ?? 0) - 1)
    if (map.get(s?.[i - 3]) <= 0) map.delete(s?.[i - 3])
    if ([...map].length === 3) result++
  }

  return result
}

console.log(countGoodSubstrings(s))
