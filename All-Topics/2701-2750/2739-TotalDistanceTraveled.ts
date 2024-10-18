const mainTank = 5,
  additionalTank = 10

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank: number, additionalTank: number) {
  let result = 0

  while (mainTank >= 5) {
    mainTank -= 5
    result += 50
    if (additionalTank > 0) {
      additionalTank--
      mainTank++
    }
  }

  result += mainTank * 10

  return result
}

console.log(distanceTraveled(mainTank, additionalTank))
