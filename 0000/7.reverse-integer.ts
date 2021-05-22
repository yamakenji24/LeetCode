/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const arr: Array<string> = x.toString().split('').reverse()
  
  arr[0] === '0' ? arr.slice(1) : null
  const last = arr.pop()
  last === '-' ? arr.splice(0, 0, last) : arr.push(last)

  const ans = Number(arr.join(''))
  
  return (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) ? 0 : ans
};
// @lc code=end

