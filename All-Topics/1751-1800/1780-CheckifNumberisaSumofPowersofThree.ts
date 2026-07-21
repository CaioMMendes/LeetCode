const n = 12

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n: number) {
  let count = 1

  const arr = []
  let val = 1

  while (val <= n) {
    val = 3 ** count
    arr.push(0)
    count++
  }
  let result = false
  generateArr([])

  function generateArr(list: number[]) {
    const sum = calc(list)
    if (sum === n) {
      result = true
      return
    }

    if (list.length > arr.length) return

    generateArr([...list, 0])
    generateArr([...list, 1])
  }

  function calc(arr: number[]) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        sum += 3 ** i
      }
    }
    return sum
  }

  return result
}

console.log(checkPowersOfThree(n))
