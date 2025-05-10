const current = "02:30",
  correct = "04:35"

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current: string, correct: string) {
  let curHours = Number(current.slice(0, 2))
  const corrHours = Number(correct.slice(0, 2))
  const curMin = Number(current.slice(3, 5))
  const corrMin = Number(correct.slice(3, 5))
  let less = false
  let result = 0

  while (true) {
    if (curHours === corrHours) break
    if (curHours + 1 === corrHours && curMin === corrMin) {
      result++
      return result
    } else if (curHours + 1 < corrHours) {
      curHours++
      result++
    } else if (curHours + 1 === corrHours && corrMin > curMin) {
      result++
      break
    } else {
      less = true
      break
    }
  }
  let difMin = less ? 60 - curMin + corrMin : Math.abs(curMin - corrMin)

  while (difMin > 0) {
    if (difMin >= 15) {
      difMin -= 15
      result++
    } else if (difMin >= 5) {
      difMin -= 5
      result++
    } else if (difMin >= 1) {
      difMin -= 1
      result++
    }
  }
  return result
}

console.log(convertTime(current, correct))
