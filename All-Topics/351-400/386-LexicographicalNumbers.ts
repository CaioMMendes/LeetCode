
const n = 13

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n:number) {
    const strings=[]


    for (let i=1;i<=n;i++){
        strings.push(String(i))
    }


    return strings.sort((a,b)=>a.localeCompare(b)).map(Number)
};


console.log(lexicalOrder(n))