const password = "IloveLe3tcode!"

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password: string) {
  if (password.length < 8) return false
  if (!/[a-z]/.test(password)) return false
  if (!/[A-Z]/.test(password)) return false
  if (!/\d/.test(password)) return false
  if (!/[!@#$%^&*()\-\+]/.test(password)) return false

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) return false
  }

  return true
}

console.log(strongPasswordCheckerII(password))
