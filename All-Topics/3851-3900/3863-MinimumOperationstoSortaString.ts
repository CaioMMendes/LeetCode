const s = "edc"

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s: string) {
  const target = sortString(s)

  if (target === s) return 0

  if (s.length <= 2) {
    return -1
  }

  function sortString(str: string) {
    return str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  }

  const attempt1 = check(s, 1, true)
  const attempt2 = check(s, 1, false)

  function check(str: string, deep: number, isLeft: boolean) {
    if (deep > 3) return -1

    const left = sortString(str.slice(0, str.length - 1)) + str[str.length - 1]
    const right = str[0] + sortString(str.slice(1, str.length))

    if (left === target || right === target) return deep

    return check(isLeft ? left : right, deep + 1, !isLeft)
  }

  return attempt1 > attempt2 ? attempt2 : attempt1
}

console.log(minOperations(s))
