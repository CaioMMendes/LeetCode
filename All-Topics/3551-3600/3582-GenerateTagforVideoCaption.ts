const caption = "Leetcode daily streak achieved"

/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption: string) {
  const regex = /[^a-zA-Z]+/g

  let splited = caption.trim().split(" ")

  splited = splited.map((val, index) => {
    val = val.replace(regex, "")
    if (index === 0) return val.toLowerCase()
    if (!val) return ""
    return val?.[0]?.toUpperCase() + val.slice(1).toLowerCase()
  })

  const joined = splited.join("")

  const result = "#" + joined

  return result.slice(0, 100)
}

console.log(generateTag(caption))
