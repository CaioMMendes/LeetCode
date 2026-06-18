const hour = 3,
  minutes = 15

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour: number, minutes: number) {
  const minutesAngle = (360 / 60) * minutes
  const hourAngle = (360 / 12) * (hour % 12) + (30 * minutes) / 60

  const option1 = Math.abs(minutesAngle - hourAngle)
  const option2 = 360 - option1

  return Math.min(option1, option2)
}

console.log(angleClock(hour, minutes))
