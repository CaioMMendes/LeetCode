const code = ["SAVE20", "", "PHARMA5", "SAVE@20"],
  businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"],
  isActive = [true, true, true, true]

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (
  code: string[],
  businessLine: string[],
  isActive: boolean[]
) {
  const result = []
  const validCategories = new Set([
    "electronics",
    "grocery",
    "pharmacy",
    "restaurant",
  ])

  const categoryOrder: Record<string, number> = {
    "electronics": 0,
    "grocery": 1,
    "pharmacy": 2,
    "restaurant": 3,
  }

  for (let i = 0; i < code.length; i++) {
    const checkRegex = /^[a-zA-Z0-9_]+$/.test(code[i])
    const checkCategories = validCategories.has(businessLine[i])

    if (checkRegex && checkCategories && isActive[i]) {
      result.push({
        code: code[i],
        category: businessLine[i],
      })
    }
  }

  return result
    .sort((a, b) => {
      const categoryCompare =
        categoryOrder[a.category] - categoryOrder[b.category]
      if (categoryCompare !== 0) return categoryCompare

      if (a.code < b.code) return -1
      if (a.code > b.code) return 1
      return 0
    })
    .map((val) => val.code)
}

console.log(validateCoupons(code, businessLine, isActive))
