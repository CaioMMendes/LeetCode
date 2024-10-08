const s = "11111222223",
  k = 3

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s: string, k: number) {
  while (s.length > k) {
    let temp = ""
    const sLength = s.length

    for (let i = 0; i < sLength; i += k) {
      let sum = 0
      for (let m = 0; m < k; m++) {
        if (i + m >= s.length) break
        sum += Number(s[i + m])
      }
      temp += sum
    }
    s = temp
  }

  return s
}

console.log(digitSum(s, k))
