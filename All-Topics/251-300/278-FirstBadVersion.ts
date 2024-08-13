/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let max = n
    let min = 1
    let result = 1

    while (max >= min) {
      const mid = Math.floor((max + min) / 2)

      if (isBadVersion(mid) === true) {
        max = mid - 1
        result = mid
      } else {
        min = mid + 1
      }
    }

    return result
  }
}
