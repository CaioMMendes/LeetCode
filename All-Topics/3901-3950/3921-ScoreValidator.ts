const events = ["1", "4", "W", "6", "WD"]

/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events: string[]) {
  let counter = 0
  let index = 0
  let score = 0
  while (counter < 10 && index <= events.length - 1) {
    const element = events[index]
    const numberElement = Number(element)
    if (numberElement > 0) {
      score += numberElement
    }

    if (element === "W") counter++

    if (element === "WD" || element === "NB") score++

    index++
  }

  return [score, counter]
}

console.log(scoreValidator(events))
