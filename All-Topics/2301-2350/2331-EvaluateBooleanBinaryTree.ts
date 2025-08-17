//@ts-nocheck



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {

   return runTree(root)

   


    function runTree(node){
        if(node.left===null && node.right===null){
            return node.val===1
        }

        let leftResult
        let rightResult

        if(node.left){
             leftResult=runTree(node.left)
        }

        if(node.right){
             rightResult=runTree(node.right)
        }

        if(node.val===2){
            if(leftResult||rightResult){
                return true
            }
            return false
        }else{
            if(leftResult&&rightResult){
                return true
            }
            return false
        }




    }
};