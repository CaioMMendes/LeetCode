const blocks = "WBBWWBBWBW",
  k = 7

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks: string, k: number) {
  let min = Infinity
  const count: Record<string, number> = {
    "W": 0,
    "B": 0,
  }

  for (let i = 0; i < k; i++) {
    count[blocks[i]]++
  }

  min = k - count["B"]

  for (let i = k; i < blocks.length; i++) {
    count[blocks[i - k]]--
    count[blocks[i]]++

    if (k - count["B"] < min) {
      min = k - count["B"]
    }
  }

  return min < 0 ? 0 : min
}

console.log(minimumRecolors(blocks, k))
