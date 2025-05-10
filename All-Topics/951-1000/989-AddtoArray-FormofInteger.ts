const num = [1, 2, 0, 0],
  k = 34

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num: number[], k: number) {
  const splited = String(k).split("").map(Number)
  const length = splited.length
  if (num.length >= length) {
    return resultFunc(num, splited)
  } else {
    return resultFunc(splited, num)
  }

  function resultFunc(max: number[], min: number[]) {
    const maxLength = max.length
    const minLength = min.length
    let rest = 0
    for (let i = 0; i < minLength; i++) {
      let sum = min[minLength - 1 - i] + max[maxLength - 1 - i] + rest
      rest = 0
      if (sum >= 10) {
        rest = 1
        sum -= 10
      }
      max[maxLength - 1 - i] = sum
    }

    if (rest) {
      let count = 0
      while (rest > 0) {
        if (minLength + count === maxLength && rest > 0) {
          max.unshift(1)
          break
        }
        let sum = max[maxLength - minLength - count - 1] + rest
        rest = 0
        if (sum >= 10) {
          rest = 1
          sum -= 10
        }
        max[maxLength - minLength - count - 1] = sum
        count++
      }
    }

    return max
  }
}

console.log(addToArrayForm(num, k))
