const s1 = "this apple is sweet",
  s2 = "this apple is sour"

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1: string, s2: string) {
  const splited1 = s1.split(" ")
  const splited2 = s2.split(" ")
  let result = []
  const count: Record<string, number> = {}

  splited1.forEach((val) => {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  })

  splited2.forEach((val) => {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  })

  for (const key in count) {
    if (count[key] < 2) {
      result.push(key)
    }
  }

  return result
}

console.log(uncommonFromSentences(s1, s2))
