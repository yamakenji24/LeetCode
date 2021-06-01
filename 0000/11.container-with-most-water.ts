/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
    const a = height[left];
    const b = height[right];

    const area = Math.min(a, b) * (right - left);

    if (area > max) max = area;

    (b > a) ? left++ : right--;
  }
  return max
};
// @lc code=end
