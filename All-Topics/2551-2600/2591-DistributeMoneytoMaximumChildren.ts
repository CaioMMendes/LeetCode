const money = 20,
  children = 3

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money: number, children: number) {
  if (money < children) {
    return -1
  }
  if (money === 8 * children) {
    return children
  }
  const maxK = Math.min(children, Math.floor((money - children) / 7))
  for (let k = maxK; k >= 0; k--) {
    const C = children - k
    if (C < 0) continue
    const R = money - 8 * k
    if (C === 0) {
      continue // Já verificado anteriormente
    } else if (C === 1) {
      const E = R - C
      if (E !== 3) {
        return k
      }
    } else {
      return k
    }
  }
  return -1
}

console.log(distMoney(money, children))
