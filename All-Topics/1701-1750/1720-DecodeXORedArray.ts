const encoded = [1, 2, 3],
  first = 1

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded: number[], first: number) {
  const encodedLength = encoded.length

  const result = [first]

  for (let i = 0; i < encodedLength; i++) {
    if (i === 0) {
      result.push(first ^ encoded[i])
      continue
    } else {
      result.push(result[i] ^ encoded[i])
    }
  }
  return result
}

console.log(decode(encoded, first))
