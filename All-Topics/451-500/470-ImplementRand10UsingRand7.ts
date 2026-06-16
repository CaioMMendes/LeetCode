//@ts-nocheck

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  while (true) {
    const random = 7 * (rand7() - 1) + (rand7() - 1)
    if (random < 10) {
      return random + 1
    }
  }
}
