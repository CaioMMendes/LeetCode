type GarbageChar = "P" | "M" | "G"
type CountMap = Partial<Record<GarbageChar, number>>

const garbageCollection = (garbage: string[], travel: number[]): number => {
  const obj: CountMap[] = []
  const lastGarbage: Record<GarbageChar, number> = { P: 0, M: 0, G: 0 }

  for (let i = 0; i < garbage.length; i++) {
    obj[i] = {}
    for (const char of garbage[i] as Iterable<GarbageChar>) {
      obj[i][char] = (obj[i][char] ?? 0) + 1
      lastGarbage[char] = i
    }
  }

  let result = 0
  const trucks: GarbageChar[] = ["P", "M", "G"]

  for (const truck of trucks) {
    for (let i = 0; i <= lastGarbage[truck]; i++) {
      result += travel[i - 1] ?? 0
      result += obj[i]?.[truck] ?? 0
    }
  }

  return result
}

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3])) // 21
