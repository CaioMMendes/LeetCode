const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails: string[]) {
  const result = new Set()
  const emailsLength = emails.length

  for (let i = 0; i < emailsLength; i++) {
    if (!isValidEmail(emails[i])) continue

    const splited = emails[i].split("@")
    const splitedLocal = splited[0].replace(/\./g, "").split("+")[0]
    result.add(splitedLocal + "@" + splited[1])
  }

  console.log(result)
  return result.size
  function isValidEmail(email: string) {
    const lowerCase = email.toLowerCase()
    if (lowerCase === email) {
      return true
    }
    return false
  }
}

console.log(numUniqueEmails(emails))
