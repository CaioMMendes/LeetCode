const ransomNote = "aa",
  magazine = "aab"

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const countRansom = {}
  const countMagazine = {}
  const ransomNoteLength = ransomNote.length
  const magazineLength = magazine.length

  for (let i = 0; i < ransomNoteLength; i++) {
    const element = ransomNote[i]
    if (countRansom[element]) {
      countRansom[element]++
    } else {
      countRansom[element] = 1
    }
  }

  for (let i = 0; i < magazineLength; i++) {
    const element = magazine[i]
    if (countMagazine[element]) {
      countMagazine[element]++
    } else {
      countMagazine[element] = 1
    }
  }

  for (let key in countRansom) {
    const numbers = countRansom[key]

    for (let i = 0; i < numbers; i++) {
      if (countMagazine[key] > 0) {
        countMagazine[key]--
        continue
      }
      return false
    }
  }

  return true
}

console.log(canConstruct(ransomNote, magazine))
