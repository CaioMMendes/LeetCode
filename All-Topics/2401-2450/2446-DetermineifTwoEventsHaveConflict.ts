const event1 = ["01:15", "02:00"],
  event2 = ["02:00", "03:00"]

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1: string[], event2: string[]) {
  function toMinutes(string: string) {
    const [hour, min] = string.split(":").map(Number)
    return hour * 60 + min
  }

  const start1 = toMinutes(event1[0])
  const end1 = toMinutes(event1[1])
  const start2 = toMinutes(event2[0])
  const end2 = toMinutes(event2[1])

  return start1 <= end2 && start2 <= end1

  /*
Para que dois intervalos tenham interseção, alguma parte de um intervalo deve estar sobreposta ao outro.
Ou seja, o final de um intervalo não pode ocorrer antes do início do outro, e vice-versa.

start1 < end2 && start2 < end1 (neste caso quando esta igual ele considera intersecção)
*/
}

console.log(haveConflict(event1, event2))
