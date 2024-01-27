const nums1 = [1, 3],
  nums2 = [2];

// const findMedianSortedArrays = function (nums1: number[], nums2: number[]) {

// const menorArray=nums1.length<nums2.length?nums1:nums2
// let maiorArray = nums1.length < nums2.length ? nums2 : nums1;
// menorArray.map((number)=>{

// })

// function binarySearch(arr:number[],number:number,start=0,end=arr.length-1){
//     if(start>end)return maiorArray.splice(end,0,number)
//     const mid=arr.length/2 |0
//     const midNumber=arr[mid]

//     mid===number&&maiorArray.splice(mid,0,number)

//     if(midNumber>number && arr[mid-1]){
//         return binarySearch(arr,number,start,mid-1)
//     }else{
//         return binarySearch(arr,number,mid+1,end)
//     }
// }
// };

console.log(findMedianSortedArrays(nums1, nums2));

function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  let c = [...nums1, ...nums2].sort((a, b) => a - b);

  //Get the floor value
  //o | é um operador bit a bit que serve para truncar o valor de forma rápida
  const half = (c.length / 2) | 0;

  //If odd then return middle element
  if (c.length % 2) return c[half];

  //If even then return the average of two mid elements
  return (c[half] + c[half - 1]) / 2;
}
