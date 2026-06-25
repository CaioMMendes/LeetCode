const n = 1,
  k = 3

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n: number, k: number) {
  let list: string[] = []
  const letters = ["a", "b", "c"]

  run([])

  list.sort((a, b) => a.localeCompare(b))

  return list[k - 1] ?? ""

  function run(array: string[]) {
    if (array.length > n) return
    if (array.length === n) list.push(array.join(""))

    for (const val of letters) {
      if (val !== array[array.length - 1]) {
        run([...array, val])
      }
    }
  }
}

console.log(getHappyString(n, k))
