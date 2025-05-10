const arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 },
  ],
  arr2 = [{ "id": 3, "x": 5 }]

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1: any, arr2: any) {
  const map = new Map()

  // Preencha o Map com os elementos de arr1 usando id como chave
  for (const element of arr1) {
    map.set(element.id, element)
  }

  // Atualize ou adicione os elementos de arr2
  for (const element of arr2) {
    if (map.has(element.id)) {
      const existing = map.get(element.id)
      // Mescla os valores
      for (let key in element) {
        existing[key] = element[key]
      }
    } else {
      map.set(element.id, element)
    }
  }

  // Converta o Map de volta para um array e ordene
  return Array.from(map.values()).sort((a, b) => a.id - b.id)
}

console.log(join(arr1, arr2))
