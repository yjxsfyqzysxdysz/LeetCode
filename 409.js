/**
 * 最长回文串
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 *
 * 示例 1:
 * 输入:s = "abccccdd"
 * 输出:7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 * 示例 2:
 * 输入:s = "a"
 * 输入:1
 *
 * 示例 3:
 * 输入:s = "bb"
 * 输入: 2
 *
 * 提示:
 * 1 <= s.length <= 2000
 * s 只能由小写和/或大写英文字母组成
 */

/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//   if (s.length === 1) return 1
//   let map = new Map()
//   for (let i = 0, len = s.length; i < len; i++) {
//     const item = s[i]
//     const num = map.get(s[i]) || 0
//     map.set(item, num + 1)
//   }
//   let res = 0
//   for (const [, val] of map.entries()) {
//     res += !(val % 2) || !(res % 2) ? val : val - 1
//   }
//   return res
// }

// 计算奇数个数
var longestPalindrome = function (s) {
  if (s.length === 1) return 1
  let map = new Map()
  const len = s.length
  for (let i = 0; i < len; i++) {
    const item = s[i]
    const num = map.get(s[i]) || 0
    map.set(item, num + 1)
  }
  let res = 0
  for (const [, val] of map.entries()) {
    res += val % 2 ? 1 : 0
  }
  return len - res + (res ? 1 : 0)
}

console.log(longestPalindrome('bananas'))
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('bb'))
