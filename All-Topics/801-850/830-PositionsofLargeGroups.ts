const s = "abbxxxxzzy"

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s: string) {
  let currentIndex = 0
  let currentChar = s[0]
  let count = 1
  const length = s.length
  const result = []

  for (let i = 1; i < length; i++) {
    if (currentChar === s[i]) {
      count++
    } else {
      if (count >= 3) {
        result.push([currentIndex, i - 1])
      }
      count = 1
      currentChar = s[i]
      currentIndex = i
    }
  }

  if (count >= 3) {
    result.push([currentIndex, length - 1])
  }

  return result
}

console.log(largeGroupPositions(s))
