const n = 3,
  k = 5

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n: number, k: number) {
  const num = n - 1

  const isEven = Math.floor(k / num) % 2 === 0

  if (isEven) {
    return k % num
  } else {
    return num - (k % num)
  }
}

console.log(numberOfChild(n, k))
