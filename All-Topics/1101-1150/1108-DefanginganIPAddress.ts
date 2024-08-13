const address = "1.1.1.1"

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address: string) {
  return address.replace(/\./g, "[.]")
}

console.log(defangIPaddr(address))
