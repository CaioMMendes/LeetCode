type GarbageChar = "P" | "M" | "G"
type CountMap = Partial<Record<GarbageChar, number>>

const garbage = ["G", "P", "GP", "GG"],
  travel = [2, 4, 3]

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage: string[], travel: number[]) {
  let total = 0
  let obj: Record<number, CountMap> = {}

  let result = 0

  const lastGarbage: Partial<Record<GarbageChar, number>> = {
    "G": 0,
    "P": 0,
    "M": 0,
  }

  for (let i = 0; i < garbage.length; i++) {
    if (!obj[i]) obj[i] = {}
    for (const char of garbage[i] as Iterable<GarbageChar>) {
      if (obj?.[i]?.[char]) {
        obj[i][char]++
      } else {
        obj[i][char] = 1
      }
      lastGarbage[char] = i
      total++
    }
  }

  //truck P
  for (let i = 0; i <= lastGarbage["P"]; i++) {
    result += travel?.[i - 1] ?? 0
    result += obj[i]["P"] ?? 0
  }

  //truck M
  for (let i = 0; i <= lastGarbage["M"]; i++) {
    result += travel?.[i - 1] ?? 0
    result += obj[i]["M"] ?? 0
  }

  //truck G
  for (let i = 0; i <= lastGarbage["G"]; i++) {
    result += travel?.[i - 1] ?? 0
    result += obj[i]["G"] ?? 0
  }

  return result
}

console.log(garbageCollection(garbage, travel))
