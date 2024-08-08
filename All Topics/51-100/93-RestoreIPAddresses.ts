const s = "101023";
console.log("--------------------------------");
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s: string) {
  const splited = s.split("");
  const result: string[] = [];

  let numberI = "";
  for (let i = 0; i < (s[0] === "0" ? 1 : 3); i++) {
    const elementI = splited.splice(0, 1);
    numberI += elementI;
    let numberJ = "";

    if (numberI === "0" || (Number(numberI) <= 255 && numberI[0] !== "0")) {
      const splitedJ = [...splited];
      for (let j = 0; j < (splited[0] === "0" ? 1 : 3); j++) {
        const elementJ = splitedJ.splice(0, 1);
        numberJ += elementJ;
        let numberK = "";

        if (numberJ === "0" || (Number(numberJ) <= 255 && numberJ[0] !== "0")) {
          const splitedK = [...splitedJ];
          for (let k = 0; k < (splitedJ[0] === "0" ? 1 : 3); k++) {
            const elementK = splitedK.splice(0, 1);
            numberK += elementK;

            if (
              numberK === "0" ||
              (Number(numberK) <= 255 && numberK[0] !== "0")
            ) {
              const restante = [...splitedK];
              const joinedRestante = restante.join("");

              if (
                joinedRestante === "0" ||
                (Number(joinedRestante) <= 255 &&
                  joinedRestante[0] !== "0" &&
                  joinedRestante.length > 0)
              ) {
                result.push(
                  `${numberI}.${numberJ}.${numberK}.${joinedRestante}`
                );
              }
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(restoreIpAddresses(s));
