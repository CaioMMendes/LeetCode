const initialEnergy = 5,
  initialExperience = 3,
  energy = [1, 4, 3, 2],
  experience = [2, 6, 3, 1]

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
) {
  let maxEnergy = 0
  let maxExperience = 0

  for (let i = 0; i < energy.length; i++) {
    const energyDiff = energy[i] - initialEnergy + 1
    const experienceDiff = experience[i] - initialExperience + 1

    if (energyDiff > maxEnergy) maxEnergy = energyDiff
    if (experienceDiff > maxExperience) maxExperience = experienceDiff

    initialEnergy -= energy[i]
    initialExperience += experience[i]
  }

  const sum = maxEnergy + maxExperience
  return sum
}

console.log(
  minNumberOfHours(initialEnergy, initialExperience, energy, experience)
)
