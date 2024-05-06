const items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "color",
  ruleValue = "silver"

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ruleNumber = 0
  switch (ruleKey) {
    case "type":
      ruleNumber = 0
      break
    case "color":
      ruleNumber = 1
      break
    case "name":
      ruleNumber = 2
      break
  }
  let result = 0
  const itemsLength = items.length

  for (let i = 0; i < itemsLength; i++) {
    if (items[i][ruleNumber] === ruleValue) {
      result++
    }
  }

  return result
}
