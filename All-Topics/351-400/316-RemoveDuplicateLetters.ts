const s = "cbacdcbc"

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s: string) {
  const set = new Set<string>()
  const indexes: Record<string, number[]> = {}

  for (let i = 0; i < s.length; i++) {
    set.add(s[i])

    if (indexes[s[i]]) {
      indexes[s[i]].push(i)
    } else {
      indexes[s[i]] = [i]
    }
  }

  const values = [...set].sort((a, b) => a.localeCompare(b))
  let result = ""

  getString(-1, "")

  function getString(i: number, string: string) {
    if (result !== "") return

    if (result === "" && string.length === values.length) {
      result = string
      return
    }

    for (const val of values) {
      if (result !== "") return
      if (string.indexOf(val) !== -1) continue
      const apparitions = indexes[val]
      for (const j of apparitions) {
        if (j > i) {
          // NOVO: toda letra que ainda falta precisa aparecer depois de j
          const cabe = values.every(
            (v) =>
              v === val ||
              string.indexOf(v) !== -1 ||
              indexes[v][indexes[v].length - 1] > j,
          )
          if (cabe) getString(j, `${string}${val}`)
          break
        }
      }
    }
  }

  return result
}

console.log(removeDuplicateLetters(s))
