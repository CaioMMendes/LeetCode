

const s =
"abc",
k =
2

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s:string, k:number) {


    const count:Record<string,number>={}
    
    for(let i=0;i<s.length;i++){
        if(count[s[i]]){
            count[s[i]]++
        }else{
            count[s[i]]=1
        }
    }

    const entries=Object.entries(count).sort((a,b)=>a[1]-b[1])


let result=0
let distinct=entries.length
let counter=0
    while(distinct>k){

        result+=entries[counter][1]
        distinct--
        counter++

    }


return result






};



console.log(minDeletion(s,k))