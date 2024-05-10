const arr = [1, 2, 3, 5],
  k = 3

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

type DivisionsType = {
  1: number
  2: number
  div: number
}

var kthSmallestPrimeFraction = function (arr: number[], k: number) {
  const arrayLength = arr.length

  const divisions: DivisionsType[] = []

  for (let i = 0; i < arrayLength; i++) {
    const elementI = arr[i]
    for (let j = i + 1; j < arrayLength; j++) {
      const elementJ = arr[j]
      const div = elementI / elementJ
      divisions.push({ 1: elementI, 2: elementJ, div })
    }
  }

  const sorted = divisions.sort((a, b) => a.div - b.div)

  return [sorted[k - 1]["1"], sorted[k - 1]["2"]]
}

console.log(kthSmallestPrimeFraction(arr, k))
