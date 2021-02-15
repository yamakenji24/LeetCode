/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: Array<number>, target: number): Array<number> {
  const ans: Array<number> = [];
  nums.some((value: number, idx: number) => {
    let diff: number = target - value;
    let diffIdx: number = nums.lastIndexOf(diff);
    if (diffIdx > -1 && diffIdx !== idx) {
      ans.push(idx, diffIdx);
      return true;
    }
  })

  return ans;
};
// @lc code=end

