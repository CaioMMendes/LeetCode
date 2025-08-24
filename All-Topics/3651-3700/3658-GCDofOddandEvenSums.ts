const n = 4

/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n: number) {
  let even = 0
  let odd = 0

  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 === 0) {
      even += i
    } else {
      odd += i
    }
  }

  const min = Math.min(even, odd)

  for (let i = min; i >= 0; i--) {
    if (odd % i === 0 && even % i === 0) return i
  }
}

console.log(gcdOfOddEvenSums(n))
