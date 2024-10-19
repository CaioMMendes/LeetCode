const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs: string[]) {
  const mapped = strs.map((str) => {
    return str.split("").sort().join("")
  })
  let count = 0
  const unique = new Map()

  const result = []

  const length = mapped.length
  for (let i = 0; i < length; i++) {
    const element = mapped[i]
    if (unique.has(element)) {
      const index = unique.get(element)
      result[index].push(strs[i])
    } else {
      unique.set(element, count)
      result.push([strs[i]])
      count++
    }
  }

  return result
}

console.log(groupAnagrams(strs))
