const pref = [5, 2, 0, 3, 1]

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref: number[]) {
  const result = [pref[0]]
  const length = pref.length

  for (let i = 1; i < length; i++) {
    result.push(pref[i] ^ pref[i - 1])
  }
  return result
}

console.log(findArray(pref))
