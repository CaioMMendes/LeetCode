const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ]

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1: string[], list2: string[]) {
  let result: string[] = []
  let index = +Infinity
  let someIndex = 0

  const list1Length = list1.length

  for (let i = 0; i < list1Length; i++) {
    if (
      list2.some((string, ind) => {
        if (string === list1[i]) {
          someIndex = ind

          return true
        }
        return false
      })
    ) {
      if (index === someIndex + i) {
        result.push(list1[i])
      } else if (index > someIndex + i) {
        result = [list1[i]]
        index = someIndex + i
      }
    }
  }

  return result
}

console.log(findRestaurant(list1, list2))
