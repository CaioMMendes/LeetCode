<?php
class Solution
{

  /**
   * @param Integer[] $nums
   * @param Integer $val
   * @return Integer
   */
  function removeElement(&$nums, $val)
  {
    for ($i = 0; $i < count($nums); $i++) {
      if ($val === $nums[$i]) {
        array_splice($nums, $i, 1);
        $i--;
      }
    }


    return count($nums);
  }
}


$solution = new Solution();
$result = $solution->removeElement([3, 2, 2, 3], 3);
print_r($result);
