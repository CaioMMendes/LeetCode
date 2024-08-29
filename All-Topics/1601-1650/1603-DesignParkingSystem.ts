/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (
  this: { big: number; medium: number; small: number },
  big: number,
  medium: number,
  small: number
) {
  this.big = big
  this.medium = medium
  this.small = small
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType: number) {
  if (carType === 1) {
    if (this.big >= 1) {
      this.big -= 1
      return true
    }
    return false
  }

  if (carType === 2) {
    if (this.medium >= 1) {
      this.medium -= 1
      return true
    }
    return false
  }

  if (carType === 3) {
    if (this.small >= 1) {
      this.small -= 1
      return true
    }
    return false
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
