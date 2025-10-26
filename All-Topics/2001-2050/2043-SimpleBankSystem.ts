// @ts-nocheck

/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.accounts = new Map()

  for (let i = 0; i < balance.length; i++) {
    this.accounts.set(i + 1, balance[i])
  }
}

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (
    this.accounts.get(account1) < money ||
    !this.accounts.has(account1) ||
    !this.accounts.has(account2)
  )
    return false
  this.accounts.set(account1, this.accounts.get(account1) - money)
  this.accounts.set(account2, this.accounts.get(account2) + money)
  return true
}

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (this.accounts.has(account) === false) return false
  this.accounts.set(account, this.accounts.get(account) + money)
  return true
}

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (this.accounts.get(account) < money || !this.accounts.has(account))
    return false
  this.accounts.set(account, this.accounts.get(account) - money)
  return true
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
