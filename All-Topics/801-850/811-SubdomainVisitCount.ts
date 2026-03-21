const cpdomains = [
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
]

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains: string[]) {
  const count: Record<string, number> = {}

  const splited = cpdomains.map((val) => val.split(" "))

  for (const val of splited) {
    const string = val[1]
    const value = Number(val[0])

    const splitedString = string.split(/\./g)
    let currentString = ""
    for (let i = splitedString.length - 1; i >= 0; i--) {
      if (currentString === "") {
        currentString = splitedString[i]
      } else {
        currentString = `${splitedString[i]}.${currentString}`
      }
      if (count[currentString]) {
        count[currentString] += value
      } else {
        count[currentString] = value
      }
    }
  }

  const result = []

  for (const key in count) {
    result.push(`${count[key]} ${key}`)
  }

  return result
}

console.log(subdomainVisits(cpdomains))
