/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj: any) {
  return deepSearch(obj)

  function deepSearch(element: any): any {
    const type = verify(element)
    if (type === "null") return

    if (type === "object") {
      const newObject: Record<any, any> = {}
      for (const key in element) {
        if (!Boolean(element[key])) continue
        const val = deepSearch(element[key])
        newObject[key] = val
      }
      return newObject
    }

    if (type === "array") {
      const newArray = []
      for (const val of element) {
        if (!Boolean(val)) continue
        const deepVal = deepSearch(val)
        newArray.push(deepVal)
      }
      return newArray
    }

    if (Boolean(element)) {
      return element
    }
    return
  }

  function verify(obj: any) {
    if (obj === null) {
      return "null"
    } else if (Array.isArray(obj)) {
      return "array"
    } else if (typeof obj === "object") {
      return "object"
    }
  }
}

console.log(compactObject({ "a": null, "b": [false, 1] }))
console.log(compactObject([null, 0, false, 1]))
console.log(compactObject([null, 0, 5, [0], [false, 16]]))
