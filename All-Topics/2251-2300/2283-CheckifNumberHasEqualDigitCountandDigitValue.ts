const num = "1210"

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num: string) {
  const count: Record<string, number> = {}
  for (let i = 0; i < num.length; i++) {
    if (count[num[i]]) {
      count[num[i]]++
    } else {
      count[num[i]] = 1
    }
  }

  for (let i = 0; i < num.length; i++) {
    if ((count[String(i)] || 0) !== Number(num[i])) {
      return false
    }
  }

  return true
}

console.log(digitCount(num))
