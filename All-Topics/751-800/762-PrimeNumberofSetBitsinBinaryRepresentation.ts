const left = 10,
  right = 15

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left: number, right: number) {
  let result = 0
  const map = new Map()

  for (let i = left; i <= right; i++) {
    const bit = i.toString(2).replace(/0/g, "").length
    if (map.get(bit) === true) {
      result++
      continue
    } else if (map.get(bit) === false) {
      continue
    }
    const isNumberPrime = isPrime(bit)
    if (isNumberPrime) {
      result++
    }
    map.set(bit, isNumberPrime)
  }

  return result

  function isPrime(num: number) {
    if (num < 2) return false
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false
    }
    return true
  }
}

console.log(countPrimeSetBits(left, right))
