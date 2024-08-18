const code = [5, 7, 1, 4],
  k = 3

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code: number[], k: number) {
  let index = k
  if (k < 0) {
    index = (code.length + k) % code.length
  }

  const absK = Math.abs(k)
  const initialArray = [...code]
  const length = initialArray.length
  let count = 0
  for (let i = 0; i < initialArray.length; i++) {
    let sum = 0
    for (let j = 0; j < absK; j++) {
      if (k < 0) {
        sum += initialArray[(index + i + j) % length]
      } else {
        sum += initialArray[(i + j + 1) % length]
      }

      count++
    }

    code[i] = sum
  }

  return code
}

console.log(decrypt(code, k))
