const s = "100011001",
  k = 3

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s: string, k: number) {
  let beautiful = []

  let count = 0
  let string = ""

  for (let i = 0; i < s.length; i++) {
    string += s[i]

    if (s[i] === "1") count++

    if (count === k) {
      beautiful.push(string)
    }

    if (count > k) {
      let index = -1

      for (let j = 0; j < string.length; j++) {
        if (string[j] === "1") {
          if (index !== -1) {
            index = j
            break
          }
          index = j
        }
      }

      string = string.slice(index)
      beautiful.push(string)
      count--
    }
  }

  if (beautiful.length === 0) return ""

  beautiful = beautiful.map((val) => {
    let index = val.indexOf("1")
    return val.slice(index, val.length)
  })

  beautiful.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length
    return a.localeCompare(b)
  })

  return beautiful[0]
}

console.log(shortestBeautifulSubstring(s, k))
