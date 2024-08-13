const nums = [1, 3, 5, 6],
  target = 7;

const searchInsert = function (nums: number[], target: number) {
  function binarySearch(
    arr: number[],
    x: number,
    start = 0,
    end = arr.length - 1
  ) {
    console.log("first");
    if (start > end) {
      if (end === -1) {
        return 0;
      }
      return arr.length;
    }
    const mid = Math.floor((start + end) / 2);
    const midNumber = arr[mid];
    const midNumberMin = arr[mid - 1];
    const midNumberMax = arr[mid + 1];
    if (midNumber === x) return [mid];
    if (midNumber > x) {
      if (x === midNumberMin) {
        return mid - 1;
      }
      if (x >= midNumberMin) {
        return mid;
      }

      return binarySearch(arr, x, start, mid - 1);
    } else {
      if (x <= midNumberMax) {
        return mid + 1;
      }
      return binarySearch(arr, x, mid + 1, end);
    }
  }
  const result = binarySearch(nums, target);
  return result;
};

console.log(searchInsert(nums, target));
