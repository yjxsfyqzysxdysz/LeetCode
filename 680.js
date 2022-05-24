/**
 * 验证回文字符串 Ⅱ
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 *
 * 示例 1:
 * 输入: s = "aba"
 * 输出: true
 *
 * 示例 2:
 * 输入: s = "abca"
 * 输出: true
 * 解释: 你可以删除c字符。
 *
 * 示例 3:
 * 输入: s = "abc"
 * 输出: false
 *
 * 提示:
 * 1 <= s.length <= 10^5
 * s 由小写英文字母组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (check(s)) return true
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return check(s.slice(i, j)) || check(s.slice(i + 1, j + 1))
    }
  }
}

function check(s) {
  return s.length === 1 ? true : s === s.split('').reverse().join('')
}

console.log(validPalindrome('aba')) // true
console.log(validPalindrome('abca')) // true
console.log(validPalindrome('ababaa')) // true
console.log(validPalindrome('abbaa')) // true
console.log(validPalindrome('abcbca')) // true
console.log(validPalindrome('abc')) // false
