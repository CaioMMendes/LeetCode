const  image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image:number[][], sr:number, sc:number, color:number) {
    const result=image

    const startColor=image[sr][sc]
    const visited=new Set()
    

changeColor(sr,sc)

return result

    function changeColor(i:number,j:number){
        if(image?.[i]?.[j]===undefined || visited.has(`${i},${j}`))return

        result[i][j]=color
        visited.add(`${i},${j}`)

        if(image?.[i]?.[j-1]!==undefined && image?.[i]?.[j-1]===startColor){
            changeColor(i,j-1)
        }

        if(image?.[i]?.[j+1]!==undefined && image?.[i]?.[j+1]===startColor){
            changeColor(i,j+1)
        }

        if(image?.[i-1]?.[j]!==undefined && image?.[i-1]?.[j]===startColor){
            changeColor(i-1,j)
        }

        if(image?.[i+1]?.[j]!==undefined && image?.[i+1]?.[j]===startColor){
            changeColor(i+1,j)
        }

        
    }
    
};


console.log(floodFill(image,sr,sc,color))