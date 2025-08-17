const num = 100000000

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num: number) {
  let result = 0

  for (let i = 1; i < num; i++) {
    if (num % i === 0) result += i
    if (result > num) return false
  }

  return result === num
}

console.log(checkPerfectNumber(num))
