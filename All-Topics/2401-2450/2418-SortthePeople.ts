const names = ["Alice", "Bob", "Bob"],
  heights = [155, 185, 150]

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

type ArrayToSort = [number | string, number | string]

var sortPeople = function (names: string[], heights: number[]) {
  const namesLength = names.length
  const arrayToSort: ArrayToSort[] = []
  for (let index = 0; index < namesLength; index++) {
    arrayToSort.push([names[index], heights[index]])
  }

  return arrayToSort
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .map((value) => value[0])
}

console.log(sortPeople(names, heights))
