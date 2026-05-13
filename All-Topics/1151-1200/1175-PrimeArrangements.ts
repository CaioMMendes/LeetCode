const n = 100

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n: number) {
  // ? a resposta para esse problema é a multiplicação do modulo dos primos pelos não primos (não sei pq)

  let primes = 0
  let notPrimes = 0

  for (let i = n; i >= 1; i--) {
    if (checkPrime(i)) {
      primes++
    } else {
      notPrimes++
    }
  }

  const convert = 10 ** 9 + 7

  return factorialProduct(primes, notPrimes) % convert

  // function factorial(n){
  //     let result=1

  //     while(n>0){
  //         result=(result*n)%convert
  //         n--
  //     }

  //     return result
  // }

  //? tem que usar junto assim pra não quebrar o limite do integer no js
  function factorialProduct(a: number, b: number) {
    let result = 1
    for (let i = 2; i <= a; i++) result = (result * i) % convert
    for (let i = 2; i <= b; i++) result = (result * i) % convert
    return result
  }

  function checkPrime(n: number) {
    if (n === 1) return false
    if (n <= 5 && n !== 4 && n > 0) return true

    if (n % 2 === 0) return false
    if (n % 3 === 0) return false
    if (n % 5 === 0) return false

    let count = n - 1

    while (count > 1) {
      if (n % count === 0) return false
      count--
    }

    return true
  }
}

console.log(numPrimeArrangements(n))
