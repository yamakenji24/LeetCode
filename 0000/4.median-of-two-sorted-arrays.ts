/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArr = nums1.concat(nums2).sort((a, b) => a < b ? -1 : 1)
  const half = (sortedArr.length / 2) | 0

  return sortedArr.length % 2 === 1 ? sortedArr[half] : (sortedArr[half-1]+ sortedArr[half]) / 2
};
// @lc code=end

