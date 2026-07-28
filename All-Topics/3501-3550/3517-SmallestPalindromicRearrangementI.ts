const s = "babab"

/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s: string) {
  const count: Record<string, number> = {}

  for (const letter of s) {
    if (count[letter]) {
      count[letter]++
    } else {
      count[letter] = 1
    }
  }
  let left = ""
  let mid = ""
  let right = ""

  const keys = Object.keys(count)
  keys.sort((a, b) => a.localeCompare(b))

  for (const val of keys) {
    let number = count[val]

    while (number > 1) {
      left += val
      right += val
      number -= 2
    }

    if (number === 1) {
      mid = val
      continue
    }
  }

  right = right.split("").reverse().join("")

  return left + mid + right
}

console.log(smallestPalindrome(s))
