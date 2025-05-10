const arr = [17, 18, 5, 4, 6, 1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr: number[]) {
  const count: Record<string, number> = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++
    } else {
      count[arr[i]] = 1
    }
  }

  const keys = Object.keys(count)
  const keyLength = keys.length

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    count[element]--

    for (let j = 0; j < keyLength; j++) {
      if (count[keys[keyLength - 1 - j]] > 0) {
        result.push(Number(keys[keyLength - 1 - j]))
        break
      }
    }
  }

  result.push(-1)
  return result
}

console.log(replaceElements(arr))
