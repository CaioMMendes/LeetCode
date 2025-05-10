const arriveAlice = "08-15",
  leaveAlice = "08-18",
  arriveBob = "08-16",
  leaveBob = "08-19"

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
) {
  const reformatDate = (date: string) => `2025-${date}`
  const alice1 = new Date(reformatDate(arriveAlice)).getTime()
  const alice2 = new Date(reformatDate(leaveAlice)).getTime()
  const bob1 = new Date(reformatDate(arriveBob)).getTime()
  const bob2 = new Date(reformatDate(leaveBob)).getTime()

  const max = Math.max(alice1, bob1)
  const min = Math.min(alice2, bob2)
  const result = (min - max) / (1000 * 60 * 60 * 24)
  return result < 0 ? 0 : result + 1
}

console.log(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob))
