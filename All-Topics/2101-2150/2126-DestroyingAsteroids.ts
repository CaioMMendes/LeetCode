const mass = 10,
  asteroids = [3, 9, 19, 5, 21]

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass: number, asteroids: number[]) {
  asteroids.sort((a, b) => a - b)

  for (const val of asteroids) {
    if (mass < val) return false

    mass += val
  }

  return true
}

console.log(asteroidsDestroyed(mass, asteroids))
