

const words =
["o","cfy","en"],
groups =
[1,0,0]


/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words:string[], groups:number[]) {
   const result=[words[0]]
    let current=groups[0]

    for(let i=0;i<words.length;i++){
        if(current===groups[i])continue
        result.push(words[i])
        current=groups[i]
    }



return result

};

console.log(getLongestSubsequence(words,groups))