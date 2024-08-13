const nums = [3, 3, 3],
  target = 3;

const searchRange = function (nums: number[], target: number) {
  function binarySearch(
    arr: number[],
    x: number,
    start = 0,
    end = arr.length - 1
  ) {
    if (start > end) return [null];
    const mid = Math.floor((start + end) / 2);
    const midName = arr[mid];

    if (midName === x) return [mid];
    if (midName > x) {
      return binarySearch(arr, x, start, mid - 1);
    } else {
      return binarySearch(arr, x, mid + 1, end);
    }
  }
  const [index] = binarySearch(nums, target);
  if (index === null) {
    return [-1, -1];
  }

  let firstIndex = -Infinity;
  let lastIndex = -Infinity;

  for (let i = index + 1; i < nums.length; i++) {
    if (nums[i] !== target) {
      firstIndex = i - 1;
      break;
    }
    if (i === nums.length - 1 && nums[i] === target) {
      firstIndex = i;
      break;
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] !== target) {
      lastIndex = i + 1;
      break;
    }
    if (i === 0 && nums[i] === target) {
      lastIndex = i;
      break;
    }
  }
  const a = firstIndex !== -Infinity ? firstIndex : index;
  const b = lastIndex !== -Infinity ? lastIndex : index;
  firstIndex = Math.min(a, b);
  lastIndex = Math.max(a, b);

  return [firstIndex, lastIndex];
};

console.log(searchRange(nums, target));
