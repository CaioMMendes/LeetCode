const s = "(name)is(age)yearsold",
  knowledge = [
    ["name", "bob"],
    ["age", "two"],
  ]

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s: string, knowledge: string[][]) {
  const keys: Record<string, string> = {}

  for (const val of knowledge) {
    keys[val[0]] = val[1]
  }

  let check = ""
  let add = false

  let result = ""

  for (const val of s) {
    if (add && val !== ")") {
      check += val
      continue
    }

    if (val === ")") {
      result += keys[check] === undefined ? "?" : keys[check]
      check = ""
      add = false
      continue
    }

    if (val === "(") {
      add = true
      continue
    }

    result += val
  }

  return result
}

console.log(evaluate(s, knowledge))
