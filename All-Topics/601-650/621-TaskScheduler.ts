const tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks: string[], n: number) {
  let window = new Set()
  let result = 0
  const count: Record<string, number> = {}

  for (const val of tasks) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const ordenado = Object.fromEntries(
    Object.entries(count).sort((x, y) => y[1] - x[1]),
  )

  let remaining = tasks.length

  while (remaining > 0) {
    let finded = false
    for (const val of Object.keys(ordenado).sort(
      (x, y) => ordenado[y] - ordenado[x],
    )) {
      if (ordenado[val] && !window.has(val)) {
        window.add(val)
        ordenado[val]--
        finded = true
        remaining--
        result++
        break
      }
    }
    if (window.size > n) {
      window = new Set()
      continue
    }
    if (!finded) {
      result += n + 1 - window.size
      window = new Set()
    }
  }

  return result
}

console.log(leastInterval(tasks, n))
