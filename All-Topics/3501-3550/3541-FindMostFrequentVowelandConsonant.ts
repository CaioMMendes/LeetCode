const s = "successes"

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s: string) {
  const vowels: Record<string, number> = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  }

  const consonants: Record<string, number> = {
    b: 0,
    c: 0,
    d: 0,
    f: 0,
    g: 0,
    h: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]] !== undefined) {
      vowels[s[i]]++
    } else {
      consonants[s[i]]++
    }
  }

  const maxVowel = Math.max(...Object.values(vowels))
  const maxConsonants = Math.max(...Object.values(consonants))

  return maxVowel + maxConsonants
}

console.log(maxFreqSum(s))
