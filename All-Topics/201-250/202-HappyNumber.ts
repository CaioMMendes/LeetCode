const n = 2

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n: number) {
  const already: Record<string, boolean> = {}

  while (n !== 1 && !already[n]) {
    const splited = String(n).split("")
    already[n] = true
    n = splited.reduce((acc, cur) => acc + Number(cur) ** 2, 0)
  }

  if (n === 1) return true
  return false
}

console.log(isHappy(n))
