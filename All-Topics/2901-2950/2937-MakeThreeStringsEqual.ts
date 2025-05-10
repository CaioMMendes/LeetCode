const s1 = "abc",
  s2 = "abb",
  s3 = "ab"

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1: string, s2: string, s3: string) {
  const minLength = Math.min(s1.length, s2.length, s3.length)
  let maxLength = 0
  let result = 0
  for (let i = 0; i < minLength; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i]) break
    maxLength++
  }
  if (maxLength === 0) return -1
  result +=
    s1.length - maxLength + (s2.length - maxLength) + (s3.length - maxLength)

  return result
}

console.log(findMinimumOperations(s1, s2, s3))
