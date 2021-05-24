/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const reversed = Number(x.toString().split('').reverse().join(''))

  return reversed == x ? true : false
};
// @lc code=end

