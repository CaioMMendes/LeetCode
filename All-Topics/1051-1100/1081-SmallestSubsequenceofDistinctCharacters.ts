const s = "cbacdcbc"

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s: string) {
  const set = new Set<string>()
  const indexes: Record<string, number[]> = {}

  for (let i = 0; i < s.length; i++) {
    set.add(s[i])

    if (indexes[s[i]]) {
      indexes[s[i]].push(i)
    } else {
      indexes[s[i]] = [i]
    }
  }

  const values = [...set].sort((a: string, b: string) => a.localeCompare(b))
  let result = ""

  getString(-1, "")

  function getString(i: number, string: string) {
    if (result !== "") return

    if (result === "" && string.length === values.length) {
      result = string
      return
    }

    for (const val of values) {
      if (result !== "") return
      if (string.indexOf(val) !== -1) continue
      const apparitions = indexes[val]
      for (const j of apparitions) {
        if (j > i) {
          // NOVO: toda letra que ainda falta precisa aparecer depois de j
          const cabe = values.every(
            (v) =>
              v === val ||
              string.indexOf(v) !== -1 ||
              indexes[v][indexes[v].length - 1] > j,
          )
          if (cabe) getString(j, `${string}${val}`)
          break
        }
      }
    }
  }

  return result
}

console.log(smallestSubsequence(s))

// explique melhor o que essa linha faz

// toda letra que ainda falta precisa aparecer depois de j
// const cabe=values.every(v=>v===val||string.indexOf(v)!==-1||indexes[v][indexes[v].length-1]>j) if(cabe)getString(j,${string}${val})

// A pergunta que essa linha faz é: "se eu colocar a letra val na posição j agora, ainda consigo completar o resto depois?" Se a resposta for não, nem vale a pena entrar nesse caminho.

// Por partes

// values.every(v => ...) percorre todas as letras distintas e só dá true se todas passarem no teste. Para cada letra v, o teste passa se qualquer uma destas três condições for verdadeira:

// v===val: é a própria letra que estou colocando agora, então não preciso dela depois.
// string.indexOf(v)!==-1: essa letra já está na string montada, então também não preciso dela depois.
// indexes[v][indexes[v].length-1]>j: a última vez que v aparece em s é depois de j, então ainda dá para pegá-la mais à frente.
