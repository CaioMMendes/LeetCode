const n = 15

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n: number) {
  const result: string[] = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        result.push("FizzBuzz")
      } else {
        result.push("Fizz")
      }
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push(String(i))
    }
  }
  return result
}

console.log(fizzBuzz(n))
