const columnNumber = 701
// const columnNumber = 65535

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber: number) {
  const numbers = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  }

  let length = 0
  let value = 0
  let result = ""
  while (value <= columnNumber) {
    value += 26 ** length
    if (value > columnNumber) {
      break
    }
    length += 1
  }
  let restante = columnNumber
  for (let index = 0; index < length; index++) {
    const realNumber = Number(
      Number(
        limitarCasasDecimais((restante / 26 ** (length - index)) * 26, 2)
      ).toFixed(2)
    )

    const div = Math.floor(realNumber)

    if (index === length - 1) {
      result += numbers[restante === 0 ? 26 : restante]
    }
    if (div === realNumber && index !== length - 1) {
      if (index === length - 1 && div !== 0) {
        result += numbers[div]
      } else {
        if (index < length - 1 && div === 0) {
          result += numbers[25]
        } else {
          result += numbers[div === 0 ? 26 : div - 1]
        }
      }
    } else if (index !== length - 1) {
      if (realNumber > 27) {
        result += numbers[div - 1]
      } else {
        if (div === 0) {
          result += numbers[26]
        } else {
          result += numbers[div]
        }
      }
    }
    restante = restante % 26 ** (length - index - 1)
  }

  return result

  function limitarCasasDecimais(numero, casasDecimais) {
    var fator = Math.pow(10, casasDecimais)
    var numeroSemArredondamento = Math.trunc(numero * fator) / fator
    return numeroSemArredondamento.toFixed(casasDecimais)
  }
}
console.log(convertToTitle(columnNumber))
