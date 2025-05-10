const s = "aaabaaa",
  k = 3

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s: string, k: number) {
  const count = new Map()

  for (let i = 0; i < k; i++) {
    const element = s[i]
    if (count.get(element)) {
      count.set(element, count.get(element) + 1)
    } else {
      count.set(element, 1)
    }
  }

  for (let i = k; i <= s.length; i++) {
    const element = s?.[i]
    const keys = [...count.keys()]
    if (count.size === 1 && keys[0] !== s?.[i - k - 1] && keys[0] !== s?.[i]) {
      return true
    }

    if (count.get(element)) {
      count.set(element, count.get(element) + 1)
    } else {
      count.set(element, 1)
    }
    if (count.get(s?.[i - k])) {
      if (count.get(s?.[i - k]) <= 1) {
        count.delete(s?.[i - k])
      } else {
        count.set(s?.[i - k], count.get(s?.[i - k]) - 1)
      }
    }
  }
  return false
}

console.log(hasSpecialSubstring(s, k))
