/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  interface History {
    [key: string]: number
  }

  if(s.length < 2) {
    return s.length
  }
  
  let start: number = 0
  const history: History = {}
  const maxLengthArr: Array<number> = []
  const words: Array<string> = s.split('')

  words.forEach((val: string, idx: number) => {
    const pi: undefined | number = history[val]
    if (pi !== undefined && pi >= start) {
      start = pi + 1
    }

    const curr = idx - start + 1
    history[val] = idx
    maxLengthArr.push(curr)
  })
  
  return Math.max(...maxLengthArr);
};
// @lc code=end

