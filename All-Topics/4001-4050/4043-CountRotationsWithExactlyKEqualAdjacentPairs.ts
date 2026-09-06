const s = "aab",
  k = 1

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function (s: string, k: number) {
  let result = 0
  const size = s.length
  for (let i = 0; i < s.length; i++) {
    let count = 0
    for (let j = i + 1; j < s.length + i; j++) {
      const current = s[j % size]
      const last = s[(j - 1) % size]
      if (current === last) count++
    }
    if (count === k) result++
  }
  return result
}

console.log(countRotations(s, k))
