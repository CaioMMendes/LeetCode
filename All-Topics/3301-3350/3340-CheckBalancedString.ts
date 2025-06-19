const num = "1234"

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num: string) {
  let even = 0
  let odd = 0

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      odd += Number(num[i])
    } else {
      even += Number(num[i])
    }
  }
  return even === odd
}

console.log(isBalanced(num))
