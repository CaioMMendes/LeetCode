/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0,
    b = 1

  while (true) {
    yield a
    const tempB = b
    b = a + b
    a = tempB
  }
}

const gen = fibGenerator()
gen.next().value // 0
gen.next().value // 1
