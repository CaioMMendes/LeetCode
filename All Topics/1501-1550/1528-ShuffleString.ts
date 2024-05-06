const s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3]

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s: string, indices: number[]) {
  const length = s.length
  const array = new Array(length)
  for (let i = 0; i < length; i++) {
    array[indices[i]] = s[i]
  }
  return array.join("")
}

console.log(restoreString(s, indices))
