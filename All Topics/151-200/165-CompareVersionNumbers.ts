const version1 = "1",
  version2 = "1.1"

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1: string, version2: string) {
  const splitedVersion1 = version1.split(".")
  const splitedVersion2 = version2.split(".")
  const max = Math.max(splitedVersion1.length, splitedVersion2.length)

  for (let index = 0; index < max; index++) {
    const element1 =
      splitedVersion1[index] === undefined ? 0 : splitedVersion1[index]
    const element2 =
      splitedVersion2[index] === undefined ? 0 : splitedVersion2[index]
    if (Number(element1) > Number(element2)) {
      return 1
    } else if (Number(element1) < Number(element2)) {
      return -1
    } else if (index === max - 1) {
      return 0
    }
  }
}

console.log(compareVersion(version1, version2))
