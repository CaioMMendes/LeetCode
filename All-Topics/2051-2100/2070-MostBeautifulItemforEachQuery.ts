const items = [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
  ],
  queries = [1, 2, 3, 4, 5, 6]

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items: number[][], queries: number[]) {
  items.sort((a, b) => a[0] - b[0])

  // Criar um array de máximos acumulados
  const maxValues: number[][] = []
  let max = 0
  for (const [price, beauty] of items) {
    max = Math.max(max, beauty)
    maxValues.push([price, max]) // Armazenar o máximo acumulado
  }

  // Função de busca binária para encontrar o maior preço <= query
  const binarySearch = (query: number) => {
    let left = 0
    let right = items.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (maxValues[mid][0] <= query) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return right === -1 ? 0 : maxValues[right][1]
  }

  // Responder as queries
  return queries.map(binarySearch)
}

console.log(maximumBeauty(items, queries))
