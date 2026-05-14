const nums = [2, 3, 1, 1, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums: number[]) {
  //? unit8array é um array continuo que salva apenas 1bit por indice
  const visited = new Uint8Array(nums.length)
  const target = nums.length - 1
  let result = false

  jump(0)

  function jump(i: number) {
    if (visited[i] || result) return

    visited[i] = 1
    if (i + nums[i] >= target) {
      result = true
      return
    }
    for (let j = nums[i]; j > 0; j--) {
      const index = i + j

      jump(index)
    }
  }

  return result
}

console.log(canJump(nums))
