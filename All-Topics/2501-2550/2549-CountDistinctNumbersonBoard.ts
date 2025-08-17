const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n: number) {
  let count = 1
  const set = new Set()
  set.add(n)
  while (n > 0) {
    let temp = n
    while (temp > 0) {
      if (n % temp === 1 && !set.has(temp)) {
        set.add(temp)
      }
      temp--
    }
    n--
  }

  return set.size

  //return n-1 funciona tmb
}

console.log(distinctIntegers(n))
