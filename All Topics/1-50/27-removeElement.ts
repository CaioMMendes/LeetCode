const nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2
var removeElement = function (nums: number[], val: number) {
  let tamanho = nums.length
  for (let index = 0; index < tamanho; index++) {
    if (nums[index] === val) {
      nums.splice(index, 1)
      index--
      tamanho--
    }
  }
  return nums.length
}

console.log(removeElement(nums, val))
